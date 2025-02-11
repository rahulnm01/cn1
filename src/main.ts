import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Route } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { ContentComponent } from './app/components/content/content.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { ProjectWorkflowComponent } from './app/pages/getting-started/overview/project-workflow/project-workflow.component';
import { SystemRequirementsComponent } from './app/pages/getting-started/overview/system-requirements/system-requirements.component';
import { KeyFeaturesComponent } from './app/pages/getting-started/overview/key-features/key-features.component';
import { WindowsSetupComponent } from './app/pages/getting-started/installation/windows-setup/windows-setup.component';
import { MacosSetupComponent } from './app/pages/getting-started/installation/macos-setup/macos-setup.component';
import { LinuxSetupComponent } from './app/pages/getting-started/installation/linux-setup/linux-setup.component';
import { appConfig } from './app/app.config';
import { OverviewComponent } from './app/pages/getting-started/overview/overview.component';
import { InstallationComponent } from './app/pages/getting-started/installation/installation.component';

const routes: Route[] = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'content', component: ContentComponent },
  { path: 'footer', component: FooterComponent },
  {
    path: 'overview', component: OverviewComponent,
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
  { path: '**', redirectTo: '/' }, // Fallback
];

bootstrapApplication(AppComponent, appConfig
).catch((err) => console.error(err));
