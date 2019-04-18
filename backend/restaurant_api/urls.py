from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

app_name = 'restaurant'

router = DefaultRouter()
router.register(r'dishes', views.GenericDishList)

urlpatterns = [
    path('', include(router.urls))
]