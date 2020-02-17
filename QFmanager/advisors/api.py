from advisors.models import Advisor
from rest_framework import viewsets, permissions
from .serializers import AdvisorSerializer

class AdvisorViewSet(viewsets.ModelViewSet):
    # queryset = Advisor.objects.all()
    permission_classes = [
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]

    serializer_class = AdvisorSerializer

    def get_queryset(self):
        return self.request.user.advisors.all()
    
    # def perform_create(self, serializer):
    #     serializer.save(owner = self.request.user)