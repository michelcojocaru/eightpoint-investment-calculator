import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResult } from './investment-result.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentService } from './investment.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);

  constructor(private investmentService: InvestmentService) {
    this.resultsData.set(this.investmentService.resultsData());
  }
}
