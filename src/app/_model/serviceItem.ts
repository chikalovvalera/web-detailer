export interface Service {
    services: ServiceItem[];
}
export interface ServiceItem {
    id: string;
    title:  string;
    text:   string[];
    src:    string;
}