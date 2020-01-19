from rest_framework import serializers
from students.models import Student

# Python ==> JSON

# Student Serializer
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'