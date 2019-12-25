from django.contrib import admin
from django.urls import path, include

# create urls
urlpatterns = [
    path('', include('students.urls')),
]
