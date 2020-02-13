from officers.models import Officer
from rest_framework import viewsets, permissions
from .serializers import OfficerSerializer

# Activity Viewset
class OfficerViewSet(viewsets.ModelViewSet):
    queryset = Officer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OfficerSerializer