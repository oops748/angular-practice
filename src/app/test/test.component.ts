import { Component, OnInit } from '@angular/core';
import { CliService } from '../cli.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit { // 實作
  cliInformation = this.cliService.getcli();
  constructor(private cliService: CliService) { }

  ngOnInit(): void {
  }

}
