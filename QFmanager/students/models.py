from django.db import models

# student's information model
class Student(models.Model):
    studentID = models.CharField(max_length = 11, unique = True)
    name = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    faculty = models.CharField(max_length = 100)
    year_of_study = models.PositiveSmallIntegerField()
    department = models.CharField(max_length = 100)
    field_of_study = models.CharField(max_length = 100)
    GPAX = models.DecimalField(max_digits = 3, decimal_places = 2)
    activity_hours = models.PositiveIntegerField()
    # isn't done yet
