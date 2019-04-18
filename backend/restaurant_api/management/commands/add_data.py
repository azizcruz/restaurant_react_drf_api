from django.core.management.base import BaseCommand, CommandError
from restaurant_api.models import Dish
import pandas as pd
from time import time

# Generate a list of instances.
def dishes_instances_genertor(dishes_tuple):
    # Begin adding data in dataframe to database using tuples for faster proccess.
    for row in dishes_tuple.itertuples():
        instance = Dish(
            name=row.name,
            price=row.price,
            is_available=row.is_available
        )

        yield instance


class Command(BaseCommand):
    help = 'Add data from csv file to the database.'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='csv file contains data.')

    def handle(self, *args, **kwargs):
        start = time()
        # Use the name of the files
        file_name = kwargs['csv_file']

        # Read csv file.
        df = pd.read_csv(f'{file_name}.csv')
        
        # Make airports a list generator, better for memory sufficiency.
        dishes = dishes_instances_genertor(df)

        # Used bulk_create to send a one hit to the database that will create all the instances.
        Dish.objects.bulk_create(dishes)

        duration = time() - start
        self.stdout.write(self.style.SUCCESS(f'Data was added to database successfully it took {duration} seconds'))