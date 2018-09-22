import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SettingsComponent} from './settings.component';
import {FormsComponent} from './forms.component';
import {SwitchesComponent} from './switches.component';
import {TablesComponent} from './tables.component';
import {TabsComponent} from './tabs.component';
import {SubmitProposalComponent} from './submit-proposal.component';
import {CollapsesComponent} from './collapses.component';
import {ProposalStatsComponent} from './proposal-stats.component';
import {SubmitVotingComponent} from './submit-voting.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: 'cards',
        component: SettingsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'submit-proposal',
        component: SubmitProposalComponent,
        data: {
          title: 'Submit Proposals'
        }
      },
      {
        path: 'proposal-stats',
        component: ProposalStatsComponent,
        data: {
          title: 'Proposal Stats'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          title: 'User Settings'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: ProposalStatsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'submit-voting',
        component: SubmitVotingComponent,
        data: {
          title: 'Submit Voting'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {
}
