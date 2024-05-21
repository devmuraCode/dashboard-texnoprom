export declare namespace IAction {
  export namespace Login {
    export interface Request {
      token: IEntity.Token;
    }
  }

  export namespace Logout {
    export interface Request {
      access: string;
    }
  }
}

export declare namespace IApi {
  export namespace Login {
    export interface Request {
      username: string;
      password: string;
    }

    export interface Response {
      data: {
        access: string;
      };
    }
  }
}

export declare namespace IEntity {

  export interface Token {
    access: string;
  }
}

export declare namespace IQuery {
  export interface Login {
    username: string;
    password: string;
  }
}

export declare namespace IForm {
  export interface Login {
    username: string;
    password: string;
  }
}

export interface IState {
  isAuthenticated: boolean;
  isFetched: boolean;
  token: string;
}

export interface ILoginSchema {
  userInfo: ILoginData;
  isLoading?: boolean;
  error?: string;
  success?: boolean;
}

export interface ILoginData {
  access: string;
  refresh: string;
}

