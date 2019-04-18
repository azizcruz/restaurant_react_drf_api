from django.contrib import admin
from .models import Dish

# Register your models here.

class DishAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'is_available')
    search_fields = ('name',)
    list_editable = ('price', 'is_available')
    list_filter = ('is_available',)

admin.site.register(Dish, DishAdmin)