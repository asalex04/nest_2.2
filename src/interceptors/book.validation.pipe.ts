import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class BookValidationPipe implements PipeTransform {
  transform(id: any, metadata: ArgumentMetadata) {
    if (id < 0 ) {
      throw new Error('Id error!');
    }
    return id.toString();
  }
}