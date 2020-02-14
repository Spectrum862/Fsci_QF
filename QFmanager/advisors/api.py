from advisors.models import Advisor
from rest_framework import viewsets, permissions
from .serializers import AdvisorSerializer

class AdvisorViewSet(viewsets.ModelViewSet):
    queryset = Advisor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AdvisorSerializer