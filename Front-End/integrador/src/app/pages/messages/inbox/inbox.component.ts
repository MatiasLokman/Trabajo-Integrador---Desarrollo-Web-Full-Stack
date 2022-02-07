import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  public messages = [
    {
      message: "Hola, como estas? Hay pushee el fix" ,
      user: "Pato123",
      date: "02/02/2022" ,
    },
    {
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum officia recusandae impedit nemo doloribus fuga nam sequi, repellat, similique dicta nisi voluptatum eos libero sit eveniet facilis distinctio minus? Cumque vel, nulla non eligendi error facilis porro sit quisquam perferendis illum eveniet totam molestias similique molestiae, tenetur veniam accusantium unde aut quos nobis amet at nemo dicta? Incidunt omnis eveniet provident esse laborum ad non, reprehenderit consequatur vero minima illo eius. Minima tenetur at rem tempore atque beatae alias, eligendi laboriosam. Consectetur repudiandae illum ut iste dolore, qui obcaecati rem reiciendis, facere, quae tempore impedit? Nobis, veritatis! Omnis voluptatibus pariatur deleniti corporis qui labore similique delectus, neque tempore, molestiae minus rem iure odio maiores cum, error eius laboriosam optio deserunt unde. Esse, harum repellat nemo dolorum voluptate nesciunt aspernatur accusantium atque laudantium aliquam illo cupiditate fugit minus autem nulla nostrum." ,
      user: "Mati-33",
      date: "02/02/2022" ,
    },
    {
      message: "Hola, entregaron el proyecto?" ,
      user: "Juan",
      date: "01/02/2022" ,
    },
  ];
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.messages)
  }

  

}
