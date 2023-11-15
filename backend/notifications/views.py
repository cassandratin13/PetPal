from django.shortcuts import render
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateAPIView
from notifications.models import Notification
from notifications.serializers import NotificationSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.exceptions import NotAuthenticated, PermissionDenied

# Create your views here.
class NotificationPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'

class NotificationListView(ListAPIView):
    serializer_class = NotificationSerializer
    pagination_class = NotificationPagination

    def get_queryset(self):
        sort = self.request.query_params.get('sort')
        filter = self.request.query_params.get('filter')
        if filter == 'read':
            queryset = Notification.objects.filter(user=self.request.user.pk, read = True)
        elif filter == 'unread':
            queryset = Notification.objects.filter(user=self.request.user.pk, read = False)
        elif filter == None:
            queryset = Notification.objects.filter(user=self.request.user.pk)
        else:
            raise PermissionDenied(detail="No such filter exists.")
        
        if sort == "creation-time":
            queryset = queryset.order_by('time')
        else:
            raise PermissionDenied(detail="Invalid field to sort by.")
        
        return queryset
