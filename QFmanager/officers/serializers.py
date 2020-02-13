from rest_framework import serializers
from officers.models import Officer

# Activity Serializer
class OfficerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officer
        fields = '__all__'