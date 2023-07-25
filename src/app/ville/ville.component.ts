import { Component } from '@angular/core';
import { Ville } from '../models/ville';
import { VilleservService } from '../service/villeserv.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent {

  Listeville: Ville[] = [];
   
  constructor(public vService: VilleservService) { }
    
  ngOnInit(): void {
    this.vService.getAll().subscribe((data: Ville[])=>{
      this.Listeville = data;
      console.log(this.Listeville);
    })  
  }
    
  deletePost(id:number){
    this.vService.delete(id).subscribe(res => {
         this.Listeville = this.Listeville.filter(item => item.mId !== id);
         console.log('Post deleted successfully!');
    })
  }

}
