from advisors.models import Advisor
from rest_framework import viewsets, permissions
from .serializers import AdvisorSerializer

class AdvisorViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = AdvisorSerializer