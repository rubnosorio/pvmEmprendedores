import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
        private route: ActivatedRoute,
        private router: Router) {
            this.route.queryParams.subscribe(params => {
                console.log( params);
            if (this.router.getCurrentNavigation().extras.state) {
                let data = this.router.getCurrentNavigation().extras.state.page;
                console.log( data);
            }
        });
  }

  ngOnInit() {
            this.route.queryParams.subscribe(params => {
                console.log( params);
            // if (this.router.getCurrentNavigation().extras.state) {
            //     let data = this.router.getCurrentNavigation().extras.state.page;
            //     console.log( data);
            // }
        });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
