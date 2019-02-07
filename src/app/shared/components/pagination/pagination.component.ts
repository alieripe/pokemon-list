
import { Page } from 'src/app/core/models/page.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: Page;

  @Output() loadList: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  nextPage() {
    this.page.nextPage();
    this.loadList.emit();
  }

  prevPage() {
    this.page.prevPage();
    this.loadList.emit();
  }

  goToPage(numberPage: number) {
    this.page.setNumberPage(numberPage);
    this.loadList.emit();
  }
}
