// Angular
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {SettingsComponent} from './settings/settings.component';

// Forms Component
import {FormsComponent} from './forms/forms.component';

import {SwitchesComponent} from './switches/switches.component';
import {TablesComponent} from './tables/tables.component';

// Tabs Component
import {TabsModule} from 'ngx-bootstrap/tabs';
import {TabsComponent} from './tabs/tabs.component';

// Carousel Component
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {SubmitProposalComponent} from './submit-proposal/submit-proposal.component';

// Collapse Component
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {CollapsesComponent} from './collapses/collapses.component';

// Dropdowns Component
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

// Pagination Component
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {SubmitVotingComponent} from './submit-voting/submit-voting.component';

// Popover Component
import {PopoverModule} from 'ngx-bootstrap/popover';
import {ProposalStatsComponent} from './proposal-stats/proposal-stats.component';

// Progress Component
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {ProgressComponent} from './progress/progress.component';

// Tooltip Component
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {TooltipsComponent} from './tooltips/tooltips.component';
// Submit In Eth Component
import {SubmitProposalInEthComponent} from './submit-proposal-in-eth/submit-proposal-in-eth.component';
// Components Routing
import {BaseRoutingModule} from './base-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    SettingsComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    SubmitProposalComponent,
    CollapsesComponent,
    ProposalStatsComponent,
    SubmitVotingComponent,
    ProgressComponent,
    TooltipsComponent,
    SubmitProposalInEthComponent,


  ]
})
export class BaseModule {
}
