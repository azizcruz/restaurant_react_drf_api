from django.shortcuts import redirect
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializers import DishSerializer
from .models import Dish
from .mixins import CustomListModelMixin

class GenericDishList(CustomListModelMixin, viewsets.GenericViewSet):
    """
    A simple generic view set to list dishes
    """

    queryset = Dish.objects.all()
    serializer_class = DishSerializer

    # List all dishes.
    def get(self, request, *args, **kwargs):
            return self.list(request, *args, **kwargs)