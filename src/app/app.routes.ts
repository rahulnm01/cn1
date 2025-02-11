import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectWorkflowComponent } from './pages/getting-started/overview/project-workflow/project-workflow.component';
import { SystemRequirementsComponent } from './pages/getting-started/overview/system-requirements/system-requirements.component';
import { KeyFeaturesComponent } from './pages/getting-started/overview/key-features/key-features.component';
import { WindowsSetupComponent } from './pages/getting-started/installation/windows-setup/windows-setup.component';
import { MacosSetupComponent } from './pages/getting-started/installation/macos-setup/macos-setup.component';
import { LinuxSetupComponent } from './pages/getting-started/installation/linux-setup/linux-setup.component';
import { OverviewComponent } from './pages/getting-started/overview/overview.component';
import { InstallationComponent } from './pages/getting-started/installation/installation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'content', component: ContentComponent },
  { path: 'footer', component: FooterComponent },

  {
    path: 'getting-started',
    children: [
      {
        path: 'overview', 
        component: OverviewComponent,
        children: [
          { path: 'project-workflow', component: ProjectWorkflowComponent },
          { path: 'system-requirements', component: SystemRequirementsComponent },
          { path: 'key-features', component: KeyFeaturesComponent },
        ],
      },
      {
        path: 'installation', component: InstallationComponent,
        children: [
          { path: 'windows-setup', component: WindowsSetupComponent },
          { path: 'macos-setup', component: MacosSetupComponent },
          { path: 'linux-setup', component: LinuxSetupComponent },
        ],
      },
    ],
  },

  { path: '**', redirectTo: '/components/content/content.component' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}