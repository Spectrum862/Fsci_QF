from students.models import Student
from rest_framework import viewsets, permissions
from .serializers import StudentSerializer

# Student Viewset
class StudentViewSet(viewsets.ModelViewSet):
    permission_classes = [
        # permissions.IsAuthenticated
        permissions.AllowAny
    ]

    serializer_class = StudentSerializer

    #def get_queryset(self):
    #    return self.request.user.students.all()
    #
    #def perform_create(self, serializer):
    #    serializer.save(owner = self.request.user)
