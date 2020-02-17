from officers.models import Officer
from rest_framework import viewsets, permissions
from .serializers import OfficerSerializer

# Activity Viewset
class OfficerViewSet(viewsets.ModelViewSet):
    # queryset = Officer.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]

    serializer_class = OfficerSerializer

    def get_queryset(self):
        return self.request.user.officers.all()
    
    # def perform_create(self, serializer):
    #     serializer.save(owner = self.request.user)