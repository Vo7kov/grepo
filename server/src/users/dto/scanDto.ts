import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';

class GoodsDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;
}

export class ScanDto {
  email: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GoodsDto)
  goods: GoodsDto[];
}
