import { ZEMENACCOUNTS } from './data-zemenAccounts';
import { Injectable } from '@angular/core';
@Injectable()
export class ZemenPlinkService {

    getZemenCifProfiles(): Promise<any[]> {
        return Promise.resolve(ZEMENACCOUNTS);
    }
    getZemenNameProfiles(): Promise<any[]> {
      return Promise.resolve(ZEMENACCOUNTS);
  }

    getZemenCifProfile(cif: number): Promise<any> {
        return this.getZemenCifProfiles()
            .then(zemenacctProfiles => zemenacctProfiles
                .find(zemenacctProfiles => zemenacctProfiles.traceUser === (cif + "") ));
    }
    getZemenNameProfile(FullName: string): Promise<any> {
      return this.getZemenNameProfiles()
          .then(zemenacctProfiles => zemenacctProfiles
              .find(zemenacctProfiles => zemenacctProfiles.fullName === (FullName + "") ));
  }
}
