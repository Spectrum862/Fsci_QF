from rest_framework import routers
from .api import StudentViewSet

# create students urls

router = routers.DefaultRouter()
router.register('api/students', StudentViewSet, 'students')

urlpatterns = router.urls