import {HttpModule, Module} from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Module({
    imports: [HttpModule],
    providers: [CurrencyService],
    exports: [CurrencyService]
})
export class CurrencyModule {}
