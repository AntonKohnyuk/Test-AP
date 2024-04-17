import { Injectable } from '@angular/core';

interface SyncTableInterface {
  [code: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class SyncIconsService {
  private syncTable: SyncTableInterface = {
    '1000': 'c01',
    '1003': 'c02',
    '1006': 'c03',
    '1009': 'c04',
    '1030': 'a01',
    '1063': 'r01',
    '1066': 's01',
    '1069': 's05',
    '1072': 'd02',
    '1087': 't04',
    '1114': 's03',
    '1117': 's05',
    '1135': 'a05',
    '1147': 'a06',
    '1150': 'd01',
    '1153': 'd01',
    '1168': 'd01',
    '1171': 'd03',
    '1180': 'r01',
    '1183': 'r01',
    '1186': 'r02',
    '1189': 'r02',
    '1192': 'r03',
    '1195': 'r03',
    '1198': 'f01',
    '1201': 'f01',
    '1204': 's05',
    '1207': 's05',
    '1210': 's01',
    '1213': 's01',
    '1216': 's02',
    '1219': 's02',
    '1222': 's03',
    '1225': 's03',
    '1237': 's06',
    '1240': 'r04',
    '1243': 'r05',
    '1246': 'r06',
    '1249': 'r03',
    '1252': 'r03',
    '1255': 's01',
    '1258': 's02',
    '1261': 's06',
    '1264': 's06',
    '1273': 't01',
    '1276': 't03',
    '1279': 's02',
    '1282': 's02',
  };

  constructor() {}

  getIconPath(code: number, is_day: number): string {
    return `${this.syncTable[code]}${is_day ? 'd' : 'n'}.png`;
  }
}
