
interface Config {
    method: string;
    headers: Record<string, string>;
    body?: string;
}

export default class API {
    private api_url: string;
    
    constructor(api_url: string) {
        this.api_url = api_url;
    }

    async doFetch(path = '', method = 'GET', data?: Record<string, any>) {
        const config: Config = {
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        if(!!data) {
            config.body = JSON.stringify(data);
        }
        const response = await fetch(`${this.api_url}/${path}`, );
        return response.json(); // parses JSON response into native JavaScript objects
      }
      
} 