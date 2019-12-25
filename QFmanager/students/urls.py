from rest_framework import routers
from .api import StudentViewSet

# create students urls

router = router.DefaultRouter()
router.register('api/students', LeadViewSet, 'students')

urlpatterns = router.urls