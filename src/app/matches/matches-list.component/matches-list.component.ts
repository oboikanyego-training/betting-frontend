import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches-service';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matches-list.component',
  imports: [MaterialModule,CommonModule],
  templateUrl: './matches-list.component.html',
  styleUrl: './matches-list.component.scss'
})
export class MatchesListComponent implements OnInit {
  matches: any[] = [];

  constructor(private matchesService: MatchesService) {}

  ngOnInit() {
    this.matchesService.getMatches().subscribe(data => this.matches = data);
  }
}
