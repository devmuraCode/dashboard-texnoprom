export declare namespace IApi {
    export namespace List {
      export interface Response {
        items: IEntity.Data[];
      }
    }
  
    export namespace Single {
      export interface Response {
        items: IEntity.Data;
      }
    }
  }
  
  export declare namespace IEntity {
    export interface Data  extends IForm.Values {
      id: string;
    }
  }
  
  export declare namespace IQuery {
    export interface List {
      items: IEntity.Data[];
    }
  
    export interface Single {
      item: IEntity.Data;
    }
  
    export interface Delete {
      id: string;
    }
  }
  
  export declare namespace IForm {
    export interface Values {
      title: string;
      description: string;
      img: File | null;
    }
  }
  