import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingComponent } from './meeting-form/meeting-form.component';
import path from 'path';
import { Component } from '@angular/core';

const routeConfig: Routes =[
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Create Clients' } // Use 'data' instead of 'title'
      },
      {
        path: 'clients',
        component: ClientFormComponent,
        data: { title: 'Create Meetings' } // Use 'data' instead of 'title'
      },
      {
        path: 'meetings',
        component: MeetingComponent,
        data: { title: 'Create Meetings' } // Use 'data' instead of 'title'
      }
];
export default routeConfig;