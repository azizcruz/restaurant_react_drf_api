from django.db import models

# Create your models here.

class Dish(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    is_available = models.BooleanField(default=True)

def save(self):
    self.name = self.name.capitalize()
    return super().save()

    class Meta:
        verbose_name_plural = 'Dishes'

    def __str__(self):
        return self.name