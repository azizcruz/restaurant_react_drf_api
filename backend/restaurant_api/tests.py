from django.test import TestCase
from rest_framework.test import RequestsClient
from restaurant_api.models import Dish

# Create your tests here.

class ApiTests(TestCase):
    def setUp(self):
        self.client = RequestsClient()
        # Create some dummy data to test upon.
        self.dish1 = Dish(name='dish test 1 filter1', price=12.76)
        self.dish2 = Dish(name='dish test 2 filter2', price=20)
        self.dish3 = Dish(name='dish test 3', price=10.6)

        self.data_list = [
            self.dish1,
            self.dish2,
            self.dish3
        ]

        # Create the three data objects with one hit to database
        Dish.objects.bulk_create(self.data_list)
    
    def test_fetching_all_dishes_when_success(self):
        """
        Test if fetching all data api is workinga and what status code.
        """
        response = self.client.get('http://localhost:8000/api/dishes')
        self.assertEqual(response.status_code, 200)

    def test_fetching_all_dishes_when_fails(self):
        """
        Test what code status is sent when the link was written wrongly
        """
        response = self.client.get('http://localhost:8000/api/dishess')
        self.assertEqual(response.status_code, 404)

    def test_if_data_fitched_contains_the_same_items_as_added(self):
        """
        Test if the data fetched list has the same number of element as what was added.
        """
        response = self.client.get('http://localhost:8000/api/dishes')
        self.assertEqual(len(response.json()), 3)

    def test_if_filter_is_returning_correct_number_of_items(self):
        """
        Test if the filter returns the correct number of items.
        """
        response = self.client.get('http://localhost:8000/api/dishes?filter=true&name=filter')
        self.assertEqual(len(response.json()), 2)

    def test_if_filter_is_returning_item_when_matched_one_results(self):
        """
        Test if the filter returns the the item when name is filtered upon the item name.
        """
        response = self.client.get('http://localhost:8000/api/dishes?filter=true&name=filter1')
        self.assertEqual(response.json()[0]['name'], 'dish test 1 filter1')