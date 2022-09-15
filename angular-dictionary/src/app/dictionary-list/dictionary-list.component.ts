import { Component, OnInit } from '@angular/core';
import {Word} from "../data/Word";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-list',
  templateUrl: './dictionary-list.component.html',
  styleUrls: ['./dictionary-list.component.css']
})
export class DictionaryListComponent implements OnInit {

  dictionary: Word[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.dictionary = this.dictionaryService.getAllWord();
  }

}
