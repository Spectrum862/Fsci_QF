from activities.models import Activity
from rest_framework import viewsets, permissions
from .serializers import ActivitySerializer

# Activity Viewset
class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ActivitySerializer