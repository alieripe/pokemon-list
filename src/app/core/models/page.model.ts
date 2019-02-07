
export class Page {
  totalCount: number;
  private numberPage = 1;
  private limit = 10;
  private offset = 0;
  itensPages: number[];

  constructor() {
    this.calculateItensPages();
  }

  setNumberPage(numberPage: number) {
    this.numberPage = numberPage;
    this.calculateOffset();
    this.calculateItensPages();
  }

  setLimit(limit: number) {
    this.limit = limit;
    this.calculateOffset();
    this.calculateItensPages();
  }

  private calculateOffset() {
    this.offset = this.limit * (this.numberPage - 1);
  }

  private calculateItensPages() {
    this.itensPages = [this.numberPage - 2,
    this.numberPage - 1,
    this.numberPage,
    this.numberPage + 1,
    this.numberPage + 2];
  }

  getNumberPage() {
    return this.numberPage;
  }

  getLimit() {
    return this.limit;
  }

  getOffset() {
    return this.offset;
  }

  getUrlPagination() {
    return {
      limit: this.limit,
      offset: this.offset
    };
  }

  nextPage() {
    this.numberPage++;
    this.calculateOffset();
    this.calculateItensPages();
  }

  prevPage() {
    this.numberPage--;
    this.calculateOffset();
    this.calculateItensPages();
  }
}
