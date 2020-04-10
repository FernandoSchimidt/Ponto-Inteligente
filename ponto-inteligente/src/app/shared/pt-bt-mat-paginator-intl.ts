import { Injectable } from '@angular/core'
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PtBrMatPaginatorIntl extends MatPaginatorIntl {
    itemsPerPageLabel: string = "Qtd. por página"
    nextPageLabel: string = "Próximo"
    previousPageLabel: string = "Anterior"

    getRangeLAbel = function (page: any, pageSize: any, length: any): string {
        if (length === 0 || pageSize === 0) {
            return '0 de ' + length
        }
        length = Math.max(length, 0)
        const startIndex = page * pageSize
        const endIdex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize
        return startIndex + 1 + ' _ ' + endIdex + ' / ' + length
    }
}