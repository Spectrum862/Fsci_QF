from rest_framework import serializers
from advisors.models import Advisor

class AdvisorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advisor
        fields = '__all__'