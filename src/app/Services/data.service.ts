import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { bustrip } from '../models/bustrip.model';
// import { bustrip } from '../models/bustrip.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }
  bustrip1:bustrip[]=[
  
      {
          "date": "2021-02-15T11:59:20.890Z",
          "due": "4h52m",
          "operator": "Ride SMART",
          "busId": "GLI61092",
          "price": "27$",
          "seats": 27,
          "source": "KY",
          "dest": "WV"
      },
      {
          "date": "2021-02-25T13:54:19.462Z",
          "due": "4h44m",
          "operator": "Citilink",
          "busId": "GLI73970",
          "price": "17$",
          "seats": 31,
          "source": "AK",
          "dest": "NJ"
      },
      {
          "date": "2021-01-31T17:39:47.565Z",
          "due": "4h25m",
          "operator": "Ride SMART",
          "busId": "GLI30762",
          "price": "31$",
          "seats": 31,
          "source": "NJ",
          "dest": "IL"
      },
      {
          "date": "2021-03-13T08:03:54.475Z",
          "due": "3h18m",
          "operator": "Ride SMART",
          "busId": "GLI56801",
          "price": "26$",
          "seats": 30,
          "source": "TN",
          "dest": "DE"
      },
      {
          "date": "2021-01-10T21:11:43.373Z",
          "due": "3h23m",
          "operator": "Ride SMART",
          "busId": "GLI78077",
          "price": "26$",
          "seats": 16,
          "source": "CA",
          "dest": "ID"
      },
      {
          "date": "2021-01-12T17:59:31.308Z",
          "due": "3h46m",
          "operator": "Westcat",
          "busId": "GLI66376",
          "price": "28$",
          "seats": 24,
          "source": "NV",
          "dest": "NM"
      },
      {
          "date": "2021-02-16T16:58:32.928Z",
          "due": "4h27m",
          "operator": "Ride SMART",
          "busId": "GLI75868",
          "price": "33$",
          "seats": 30,
          "source": "TN",
          "dest": "NY"
      },
      {
          "date": "2021-03-02T06:13:19.294Z",
          "due": "3h46m",
          "operator": "Citilink",
          "busId": "GLI25201",
          "price": "30$",
          "seats": 23,
          "source": "CO",
          "dest": "NJ"
      },
      {
          "date": "2021-01-19T06:13:29.582Z",
          "due": "5h36m",
          "operator": "Ride SMART",
          "busId": "GLI12088",
          "price": "33$",
          "seats": 30,
          "source": "SD",
          "dest": "MS"
      },
      {
          "date": "2021-01-16T17:55:15.499Z",
          "due": "5h59m",
          "operator": "Westcat",
          "busId": "GLI77653",
          "price": "23$",
          "seats": 15,
          "source": "MO",
          "dest": "MI"
      },
      {
          "date": "2021-01-13T19:34:37.120Z",
          "due": "5h31m",
          "operator": "Westcat",
          "busId": "GLI99628",
          "price": "39$",
          "seats": 34,
          "source": "DE",
          "dest": "TX"
      },
      {
          "date": "2021-02-06T20:11:17.635Z",
          "due": "5h7m",
          "operator": "Westcat",
          "busId": "GLI53857",
          "price": "23$",
          "seats": 35,
          "source": "HI",
          "dest": "ME"
      },
      {
          "date": "2021-01-08T22:38:10.188Z",
          "due": "4h16m",
          "operator": "Citilink",
          "busId": "GLI23715",
          "price": "27$",
          "seats": 40,
          "source": "MO",
          "dest": "FL"
      },
      {
          "date": "2021-02-02T00:59:32.212Z",
          "due": "5h23m",
          "operator": "Ride SMART",
          "busId": "GLI36878",
          "price": "10$",
          "seats": 28,
          "source": "CO",
          "dest": "IL"
      },
      {
          "date": "2021-01-23T14:07:20.967Z",
          "due": "3h19m",
          "operator": "Westcat",
          "busId": "GLI14601",
          "price": "32$",
          "seats": 19,
          "source": "RI",
          "dest": "PA"
      },
      {
          "date": "2021-01-13T12:06:51.885Z",
          "due": "4h37m",
          "operator": "Ride SMART",
          "busId": "GLI82289",
          "price": "32$",
          "seats": 38,
          "source": "LA",
          "dest": "MD"
      },
      {
          "date": "2021-03-02T02:47:07.446Z",
          "due": "3h7m",
          "operator": "Westcat",
          "busId": "GLI37316",
          "price": "10$",
          "seats": 25,
          "source": "NH",
          "dest": "MO"
      },
      {
          "date": "2021-01-17T15:18:15.096Z",
          "due": "4h16m",
          "operator": "Westcat",
          "busId": "GLI78757",
          "price": "28$",
          "seats": 33,
          "source": "NM",
          "dest": "ME"
      },
      {
          "date": "2021-01-15T00:37:48.247Z",
          "due": "3h8m",
          "operator": "Citilink",
          "busId": "GLI68567",
          "price": "24$",
          "seats": 39,
          "source": "AZ",
          "dest": "ID"
      },
      {
          "date": "2021-03-13T00:55:32.788Z",
          "due": "4h58m",
          "operator": "Westcat",
          "busId": "GLI19376",
          "price": "40$",
          "seats": 24,
          "source": "DE",
          "dest": "MT"
      },
      {
          "date": "2021-02-10T09:52:25.418Z",
          "due": "3h8m",
          "operator": "Ride SMART",
          "busId": "GLI48575",
          "price": "20$",
          "seats": 34,
          "source": "HI",
          "dest": "WI"
      },
      {
          "date": "2021-02-26T19:55:36.147Z",
          "due": "5h58m",
          "operator": "Ride SMART",
          "busId": "GLI93544",
          "price": "26$",
          "seats": 21,
          "source": "VA",
          "dest": "AK"
      },
      {
          "date": "2021-01-09T11:27:36.576Z",
          "due": "4h21m",
          "operator": "Westcat",
          "busId": "GLI54431",
          "price": "29$",
          "seats": 18,
          "source": "TN",
          "dest": "KS"
      },
      {
          "date": "2021-02-28T17:19:50.621Z",
          "due": "3h47m",
          "operator": "Citilink",
          "busId": "GLI19180",
          "price": "40$",
          "seats": 38,
          "source": "MA",
          "dest": "MS"
      },
      {
          "date": "2021-03-09T13:36:22.205Z",
          "due": "5h37m",
          "operator": "Ride SMART",
          "busId": "GLI45161",
          "price": "22$",
          "seats": 38,
          "source": "IA",
          "dest": "KY"
      },
      {
          "date": "2021-01-12T11:53:21.592Z",
          "due": "4h21m",
          "operator": "Ride SMART",
          "busId": "GLI62021",
          "price": "12$",
          "seats": 27,
          "source": "NE",
          "dest": "NJ"
      },
      {
          "date": "2021-02-09T06:08:52.608Z",
          "due": "5h29m",
          "operator": "Ride SMART",
          "busId": "GLI57019",
          "price": "21$",
          "seats": 15,
          "source": "WV",
          "dest": "CA"
      },
      {
          "date": "2021-02-09T05:06:20.615Z",
          "due": "5h14m",
          "operator": "Citilink",
          "busId": "GLI90451",
          "price": "20$",
          "seats": 33,
          "source": "FL",
          "dest": "ID"
      },
      {
          "date": "2021-01-10T12:23:15.484Z",
          "due": "4h57m",
          "operator": "Citilink",
          "busId": "GLI56068",
          "price": "25$",
          "seats": 30,
          "source": "MI",
          "dest": "VT"
      },
      {
          "date": "2021-02-06T04:52:37.181Z",
          "due": "5h45m",
          "operator": "Citilink",
          "busId": "GLI80719",
          "price": "37$",
          "seats": 31,
          "source": "NJ",
          "dest": "WV"
      },
      {
          "date": "2021-01-06T21:30:41.215Z",
          "due": "4h24m",
          "operator": "Ride SMART",
          "busId": "GLI43410",
          "price": "21$",
          "seats": 40,
          "source": "MD",
          "dest": "MA"
      },
      {
          "date": "2021-01-05T17:16:34.777Z",
          "due": "3h34m",
          "operator": "Westcat",
          "busId": "GLI54632",
          "price": "14$",
          "seats": 31,
          "source": "LA",
          "dest": "CA"
      },
      {
          "date": "2021-02-12T15:51:35.574Z",
          "due": "3h58m",
          "operator": "Ride SMART",
          "busId": "GLI66779",
          "price": "25$",
          "seats": 28,
          "source": "MA",
          "dest": "CT"
      },
      {
          "date": "2021-02-21T04:14:13.626Z",
          "due": "3h34m",
          "operator": "Westcat",
          "busId": "GLI63321",
          "price": "14$",
          "seats": 40,
          "source": "NM",
          "dest": "HI"
      },
      {
          "date": "2021-01-13T01:17:12.479Z",
          "due": "4h36m",
          "operator": "Ride SMART",
          "busId": "GLI39615",
          "price": "16$",
          "seats": 27,
          "source": "VT",
          "dest": "TX"
      },
      {
          "date": "2021-02-18T20:10:50.514Z",
          "due": "3h19m",
          "operator": "Westcat",
          "busId": "GLI36755",
          "price": "40$",
          "seats": 18,
          "source": "ME",
          "dest": "CT"
      },
      {
          "date": "2021-02-24T02:15:13.720Z",
          "due": "5h58m",
          "operator": "Citilink",
          "busId": "GLI80976",
          "price": "10$",
          "seats": 31,
          "source": "ME",
          "dest": "MT"
      },
      {
          "date": "2021-01-17T11:31:21.838Z",
          "due": "5h39m",
          "operator": "Citilink",
          "busId": "GLI97726",
          "price": "18$",
          "seats": 28,
          "source": "NC",
          "dest": "MO"
      },
      {
          "date": "2021-01-26T16:39:51.902Z",
          "due": "3h55m",
          "operator": "Westcat",
          "busId": "GLI82243",
          "price": "33$",
          "seats": 16,
          "source": "NC",
          "dest": "TN"
      },
      {
          "date": "2021-01-31T09:02:54.251Z",
          "due": "3h21m",
          "operator": "Ride SMART",
          "busId": "GLI28766",
          "price": "28$",
          "seats": 37,
          "source": "PA",
          "dest": "NE"
      },
      {
          "date": "2021-02-27T02:31:46.684Z",
          "due": "4h25m",
          "operator": "Ride SMART",
          "busId": "GLI40433",
          "price": "27$",
          "seats": 15,
          "source": "TX",
          "dest": "NV"
      },
      {
          "date": "2021-01-24T19:47:25.546Z",
          "due": "4h8m",
          "operator": "Citilink",
          "busId": "GLI40899",
          "price": "23$",
          "seats": 25,
          "source": "LA",
          "dest": "NC"
      },
      {
          "date": "2021-02-10T19:10:17.706Z",
          "due": "3h33m",
          "operator": "Westcat",
          "busId": "GLI61173",
          "price": "31$",
          "seats": 34,
          "source": "CA",
          "dest": "NM"
      },
      {
          "date": "2021-03-10T03:08:25.622Z",
          "due": "4h35m",
          "operator": "Citilink",
          "busId": "GLI83437",
          "price": "37$",
          "seats": 22,
          "source": "GA",
          "dest": "NC"
      },
      {
          "date": "2021-01-09T23:32:56.401Z",
          "due": "3h36m",
          "operator": "Citilink",
          "busId": "GLI67431",
          "price": "36$",
          "seats": 28,
          "source": "ND",
          "dest": "ND"
      },
      {
          "date": "2021-02-16T15:43:51.682Z",
          "due": "3h14m",
          "operator": "Citilink",
          "busId": "GLI64762",
          "price": "32$",
          "seats": 20,
          "source": "MA",
          "dest": "ME"
      },
      {
          "date": "2021-01-21T04:06:15.632Z",
          "due": "3h29m",
          "operator": "Westcat",
          "busId": "GLI98416",
          "price": "10$",
          "seats": 24,
          "source": "AK",
          "dest": "OH"
      },
      {
          "date": "2020-12-31T23:39:34.160Z",
          "due": "4h16m",
          "operator": "Westcat",
          "busId": "GLI31128",
          "price": "12$",
          "seats": 27,
          "source": "CT",
          "dest": "NE"
      },
      {
          "date": "2021-03-07T02:36:42.192Z",
          "due": "5h33m",
          "operator": "Westcat",
          "busId": "GLI87414",
          "price": "34$",
          "seats": 39,
          "source": "WA",
          "dest": "AK"
      },
      {
          "date": "2021-02-21T19:29:58.180Z",
          "due": "3h20m",
          "operator": "Citilink",
          "busId": "GLI71598",
          "price": "23$",
          "seats": 23,
          "source": "WV",
          "dest": "UT"
      },
      {
          "date": "2021-01-01T11:02:45.392Z",
          "due": "3h10m",
          "operator": "Citilink",
          "busId": "GLI86959",
          "price": "23$",
          "seats": 29,
          "source": "IL",
          "dest": "NH"
      },
      {
          "date": "2021-01-02T06:05:47.463Z",
          "due": "3h20m",
          "operator": "Ride SMART",
          "busId": "GLI89705",
          "price": "14$",
          "seats": 20,
          "source": "NM",
          "dest": "KY"
      },
      {
          "date": "2021-01-26T22:46:25.097Z",
          "due": "5h25m",
          "operator": "Westcat",
          "busId": "GLI90502",
          "price": "20$",
          "seats": 28,
          "source": "VA",
          "dest": "VT"
      },
      {
          "date": "2021-02-19T06:07:52.973Z",
          "due": "3h11m",
          "operator": "Ride SMART",
          "busId": "GLI33623",
          "price": "26$",
          "seats": 33,
          "source": "ND",
          "dest": "CO"
      },
      {
          "date": "2021-01-08T08:33:08.268Z",
          "due": "5h48m",
          "operator": "Citilink",
          "busId": "GLI91602",
          "price": "12$",
          "seats": 24,
          "source": "PA",
          "dest": "IN"
      },
      {
          "date": "2021-01-13T14:30:58.841Z",
          "due": "4h29m",
          "operator": "Citilink",
          "busId": "GLI60281",
          "price": "10$",
          "seats": 40,
          "source": "UT",
          "dest": "SC"
      },
      {
          "date": "2021-02-25T07:57:21.031Z",
          "due": "3h8m",
          "operator": "Ride SMART",
          "busId": "GLI72611",
          "price": "39$",
          "seats": 30,
          "source": "MD",
          "dest": "RI"
      },
      {
          "date": "2021-01-13T00:35:45.835Z",
          "due": "4h59m",
          "operator": "Ride SMART",
          "busId": "GLI63403",
          "price": "13$",
          "seats": 31,
          "dest": "NM"
      },
      {
          "date": "2021-01-05T22:49:38.392Z",
          "due": "5h54m",
          "operator": "Westcat",
          "busId": "GLI99813",
          "price": "17$",
          "seats": 31,
          "source": "MA",
          "dest": "TN"
      },
      {
          "date": "2021-01-18T08:48:31.200Z",
          "due": "5h29m",
          "operator": "Westcat",
          "busId": "GLI28912",
          "price": "36$",
          "seats": 24,
          "source": "TN",
          "dest": "MS"
      },
      {
          "date": "2021-01-06T22:58:27.541Z",
          "due": "3h38m",
          "operator": "Citilink",
          "busId": "GLI69269",
          "price": "23$",
          "seats": 38,
          "source": "MS",
          "dest": "NE"
      },
      {
          "date": "2021-01-17T23:43:35.282Z",
          "due": "4h6m",
          "operator": "Westcat",
          "busId": "GLI20340",
          "price": "34$",
          "seats": 31,
          "source": "WY",
          "dest": "WI"
      },
      {
          "date": "2021-02-20T19:10:23.610Z",
          "due": "3h35m",
          "operator": "Citilink",
          "busId": "GLI25115",
          "price": "18$",
          "seats": 15,
          "source": "UT",
          "dest": "HI"
      },
      {
          "date": "2021-01-27T12:39:16.429Z",
          "due": "3h8m",
          "operator": "Westcat",
          "busId": "GLI39888",
          "price": "38$",
          "seats": 23,
          "source": "IA",
          "dest": "ME"
      },
      {
          "date": "2021-03-09T13:09:18.214Z",
          "due": "5h56m",
          "operator": "Ride SMART",
          "busId": "GLI96736",
          "price": "22$",
          "seats": 31,
          "source": "MS"
      },
      {
          "date": "2021-01-05T05:54:15.360Z",
          "due": "5h50m",
          "operator": "Citilink",
          "busId": "GLI22264",
          "price": "26$",
          "seats": 32,
          "dest": "AR"
      },
      {
          "date": "2021-03-10T18:49:02.055Z",
          "due": "5h16m",
          "operator": "Citilink",
          "busId": "GLI86931",
          "price": "31$",
          "seats": 16,
          "source": "AR",
          "dest": "CO"
      },
      {
          "date": "2021-01-01T18:56:44.257Z",
          "due": "5h7m",
          "operator": "Citilink",
          "busId": "GLI40729",
          "price": "37$",
          "seats": 35,
          "source": "IN",
          "dest": "TX"
      },
      {
          "date": "2021-01-14T18:14:41.637Z",
          "due": "4h3m",
          "operator": "Westcat",
          "busId": "GLI25183",
          "price": "35$",
          "seats": 23,
          "source": "WI",
          "dest": "ND"
      },
      {
          "date": "2021-03-05T17:29:05.527Z",
          "due": "5h31m",
          "operator": "Westcat",
          "busId": "GLI86000",
          "price": "25$",
          "seats": 17,
          "source": "WA",
          "dest": "MS"
      },
      {
          "date": "2021-02-17T23:51:55.145Z",
          "due": "5h29m",
          "operator": "Westcat",
          "busId": "GLI51153",
          "price": "16$",
          "seats": 22,
          "source": "CO",
          "dest": "SC"
      },
      {
          "date": "2021-02-19T09:25:59.227Z",
          "due": "3h16m",
          "operator": "Ride SMART",
          "busId": "GLI98333",
          "price": "25$",
          "seats": 19,
          "source": "AL",
          "dest": "NE"
      },
      {
          "date": "2021-01-21T22:32:32.324Z",
          "due": "4h56m",
          "operator": "Citilink",
          "busId": "GLI92784",
          "price": "29$",
          "seats": 34,
          "source": "NH",
          "dest": "MS"
      },
      {
          "date": "2021-02-27T06:14:40.497Z",
          "due": "5h46m",
          "operator": "Citilink",
          "busId": "GLI95100",
          "price": "26$",
          "seats": 34,
          "source": "CO",
          "dest": "OR"
      },
      {
          "date": "2021-02-15T22:06:12.069Z",
          "due": "4h19m",
          "operator": "Westcat",
          "busId": "GLI65291",
          "price": "22$",
          "seats": 21,
          "source": "RI",
          "dest": "CA"
      },
      {
          "date": "2021-01-11T11:37:11.060Z",
          "due": "4h39m",
          "operator": "Westcat",
          "busId": "GLI90140",
          "price": "35$",
          "seats": 34,
          "source": "MI",
          "dest": "HI"
      },
      {
          "date": "2021-03-07T13:04:35.924Z",
          "due": "4h23m",
          "operator": "Westcat",
          "busId": "GLI59157",
          "price": "40$",
          "seats": 16,
          "source": "ND",
          "dest": "OH"
      },
      {
          "date": "2021-01-18T12:29:46.863Z",
          "due": "5h34m",
          "operator": "Ride SMART",
          "busId": "GLI51058",
          "price": "26$",
          "seats": 34,
          "source": "IN",
          "dest": "NM"
      },
      {
          "date": "2021-02-07T01:46:08.467Z",
          "due": "4h12m",
          "operator": "Westcat",
          "busId": "GLI66453",
          "price": "36$",
          "seats": 34,
          "source": "KS",
          "dest": "NH"
      },
      {
          "date": "2021-01-25T08:29:06.521Z",
          "due": "3h51m",
          "operator": "Citilink",
          "busId": "GLI41035",
          "price": "21$",
          "seats": 19,
          "source": "CA",
          "dest": "AL"
      },
      {
          "date": "2021-02-03T06:14:28.239Z",
          "due": "4h8m",
          "operator": "Ride SMART",
          "busId": "GLI46432",
          "price": "32$",
          "seats": 15,
          "source": "SD",
          "dest": "NM"
      },
      {
          "date": "2021-02-17T01:27:56.929Z",
          "due": "4h11m",
          "operator": "Ride SMART",
          "busId": "GLI70730",
          "price": "36$",
          "seats": 24,
          "source": "NH",
          "dest": "NY"
      },
      {
          "date": "2021-02-05T18:55:44.141Z",
          "due": "5h2m",
          "operator": "Westcat",
          "busId": "GLI31235",
          "price": "38$",
          "seats": 30,
          "source": "NM",
          "dest": "TX"
      },
      {
          "date": "2021-01-20T19:14:33.929Z",
          "due": "3h53m",
          "operator": "Westcat",
          "busId": "GLI51971",
          "price": "20$",
          "seats": 37,
          "source": "TX",
          "dest": "VT"
      },
      {
          "date": "2021-03-09T11:04:56.440Z",
          "due": "4h17m",
          "operator": "Citilink",
          "busId": "GLI13309",
          "price": "19$",
          "seats": 29,
          "source": "SD",
          "dest": "NJ"
      },
      {
          "date": "2021-01-02T22:13:06.818Z",
          "due": "3h38m",
          "operator": "Citilink",
          "busId": "GLI61784",
          "price": "26$",
          "seats": 29,
          "source": "AK",
          "dest": "CA"
      },
      {
          "date": "2021-01-02T01:30:03.442Z",
          "due": "3h18m",
          "operator": "Citilink",
          "busId": "GLI14065",
          "price": "28$",
          "seats": 19,
          "source": "MN",
          "dest": "NJ"
      },
      {
          "date": "2021-03-13T15:50:09.454Z",
          "due": "4h44m",
          "operator": "Westcat",
          "busId": "GLI97484",
          "price": "19$",
          "seats": 28,
          "source": "NV",
          "dest": "MD"
      },
      {
          "date": "2021-01-02T19:24:06.693Z",
          "due": "4h13m",
          "operator": "Westcat",
          "busId": "GLI42987",
          "price": "32$",
          "seats": 33,
          "source": "ND",
          "dest": "AL"
      },
      {
          "date": "2021-03-01T18:39:23.319Z",
          "due": "3h20m",
          "operator": "Ride SMART",
          "busId": "GLI99744",
          "price": "26$",
          "seats": 15,
          "source": "PA",
          "dest": "AK"
      },
      {
          "date": "2021-03-05T04:49:18.375Z",
          "due": "3h5m",
          "operator": "Ride SMART",
          "busId": "GLI50151",
          "price": "34$",
          "seats": 31,
          "source": "MA",
          "dest": "KY"
      },
      {
          "date": "2021-01-21T04:00:35.773Z",
          "due": "3h16m",
          "operator": "Ride SMART",
          "busId": "GLI99504",
          "price": "18$",
          "seats": 23,
          "source": "WY",
          "dest": "NV"
      },
      {
          "date": "2021-01-05T09:29:14.497Z",
          "due": "5h6m",
          "operator": "Citilink",
          "busId": "GLI92647",
          "price": "20$",
          "seats": 25,
          "source": "NJ",
          "dest": "NJ"
      },
      {
          "date": "2021-01-28T13:04:34.655Z",
          "due": "3h5m",
          "operator": "Ride SMART",
          "busId": "GLI39998",
          "price": "40$",
          "seats": 22,
          "source": "MS"
      },
      {
          "date": "2021-03-09T06:07:14.496Z",
          "due": "3h44m",
          "operator": "Westcat",
          "busId": "GLI95206",
          "price": "29$",
          "seats": 29,
          "source": "VA",
          "dest": "SC"
      },
      {
          "date": "2021-03-01T21:41:24.716Z",
          "due": "5h3m",
          "operator": "Ride SMART",
          "busId": "GLI53264",
          "price": "39$",
          "seats": 25,
          "source": "DE",
          "dest": "TX"
      },
      {
          "date": "2021-03-02T10:40:47.081Z",
          "due": "5h34m",
          "operator": "Ride SMART",
          "busId": "GLI56957",
          "price": "37$",
          "seats": 28,
          "source": "AZ",
          "dest": "GA"
      },
      {
          "date": "2021-02-03T13:07:14.244Z",
          "due": "4h42m",
          "operator": "Citilink",
          "busId": "GLI99317",
          "price": "29$",
          "seats": 32,
          "source": "ID",
          "dest": "VT"
      },
      {
          "date": "2021-03-10T22:28:46.188Z",
          "due": "4h8m",
          "operator": "Westcat",
          "busId": "GLI61262",
          "price": "21$",
          "seats": 35,
          "source": "NE",
          "dest": "TX"
      },
      {
          "date": "2021-02-15T20:40:03.627Z",
          "due": "3h56m",
          "operator": "Citilink",
          "busId": "GLI67536",
          "price": "24$",
          "seats": 31,
          "source": "GA",
          "dest": "SD"
      },
      {
          "date": "2021-02-07T18:13:20.613Z",
          "due": "3h37m",
          "operator": "Ride SMART",
          "busId": "GLI78051",
          "price": "15$",
          "seats": 26,
          "source": "ND",
          "dest": "MS"
      },
      {
          "date": "2021-01-16T08:45:57.252Z",
          "due": "4h24m",
          "operator": "Citilink",
          "busId": "GLI96632",
          "price": "17$",
          "seats": 21,
          "source": "DE",
          "dest": "MN"
      },
      {
          "date": "2021-03-06T10:37:35.960Z",
          "due": "4h42m",
          "operator": "Ride SMART",
          "busId": "GLI15876",
          "price": "38$",
          "seats": 32,
          "source": "AK"
      },
      {
          "date": "2021-01-21T02:10:51.771Z",
          "due": "3h33m",
          "operator": "Westcat",
          "busId": "GLI94796",
          "price": "17$",
          "seats": 25,
          "source": "FL",
          "dest": "AL"
      },
      {
          "date": "2021-02-18T15:31:07.024Z",
          "due": "3h10m",
          "operator": "Westcat",
          "busId": "GLI73987",
          "price": "19$",
          "seats": 40,
          "source": "ME",
          "dest": "NY"
      },
      {
          "date": "2021-01-24T03:54:12.927Z",
          "due": "5h9m",
          "operator": "Westcat",
          "busId": "GLI63093",
          "price": "37$",
          "seats": 26,
          "source": "TN",
          "dest": "MA"
      },
      {
          "date": "2021-02-04T14:25:15.487Z",
          "due": "5h38m",
          "operator": "Citilink",
          "busId": "GLI15119",
          "price": "31$",
          "seats": 15,
          "source": "OR",
          "dest": "MI"
      },
      {
          "date": "2021-02-06T07:16:11.193Z",
          "due": "3h4m",
          "operator": "Citilink",
          "busId": "GLI92571",
          "price": "35$",
          "seats": 22,
          "source": "KY",
          "dest": "DE"
      },
      {
          "date": "2021-02-07T04:34:16.089Z",
          "due": "5h59m",
          "operator": "Citilink",
          "busId": "GLI62567",
          "price": "20$",
          "seats": 25,
          "dest": "KY"
      },
      {
          "date": "2021-01-23T21:13:16.940Z",
          "due": "4h43m",
          "operator": "Westcat",
          "busId": "GLI82552",
          "price": "13$",
          "seats": 31,
          "source": "UT",
          "dest": "DE"
      },
      {
          "date": "2021-01-10T12:25:41.097Z",
          "due": "5h22m",
          "operator": "Westcat",
          "busId": "GLI53278",
          "price": "37$",
          "seats": 24,
          "source": "OK",
          "dest": "NE"
      },
      {
          "date": "2021-01-04T11:56:17.947Z",
          "due": "5h49m",
          "operator": "Westcat",
          "busId": "GLI43709",
          "price": "17$",
          "seats": 16,
          "source": "OH",
          "dest": "MD"
      },
      {
          "date": "2021-03-01T06:03:18.573Z",
          "due": "3h59m",
          "operator": "Westcat",
          "busId": "GLI72895",
          "price": "24$",
          "seats": 15,
          "source": "DE",
          "dest": "CO"
      },
      {
          "date": "2021-01-29T05:08:35.010Z",
          "due": "3h47m",
          "operator": "Citilink",
          "busId": "GLI87071",
          "price": "17$",
          "seats": 37,
          "source": "MO",
          "dest": "FL"
      },
      {
          "date": "2021-02-20T02:09:32.918Z",
          "due": "5h31m",
          "operator": "Westcat",
          "busId": "GLI88157",
          "price": "16$",
          "seats": 25,
          "source": "AR",
          "dest": "LA"
      },
      {
          "date": "2021-02-18T23:07:11.868Z",
          "due": "4h10m",
          "operator": "Ride SMART",
          "busId": "GLI39291",
          "price": "40$",
          "seats": 23,
          "source": "GA",
          "dest": "ME"
      },
      {
          "date": "2021-02-16T15:43:48.825Z",
          "due": "3h51m",
          "operator": "Westcat",
          "busId": "GLI98964",
          "price": "14$",
          "seats": 34,
          "source": "UT",
          "dest": "AR"
      },
      {
          "date": "2021-02-07T06:03:11.707Z",
          "due": "3h41m",
          "operator": "Ride SMART",
          "busId": "GLI87149",
          "price": "37$",
          "seats": 32,
          "source": "AK",
          "dest": "GA"
      },
      {
          "date": "2021-01-12T23:36:11.971Z",
          "due": "4h35m",
          "operator": "Westcat",
          "busId": "GLI19319",
          "price": "19$",
          "seats": 25,
          "source": "FL",
          "dest": "AK"
      },
      {
          "date": "2021-02-19T10:08:59.724Z",
          "due": "5h50m",
          "operator": "Ride SMART",
          "busId": "GLI22581",
          "price": "29$",
          "seats": 29,
          "source": "NY",
          "dest": "ME"
      },
      {
          "date": "2021-01-19T07:49:16.897Z",
          "due": "5h25m",
          "operator": "Citilink",
          "busId": "GLI44833",
          "price": "12$",
          "seats": 28,
          "source": "ME",
          "dest": "MT"
      },
      {
          "date": "2021-02-22T23:31:18.087Z",
          "due": "3h48m",
          "operator": "Citilink",
          "busId": "GLI86037",
          "price": "39$",
          "seats": 24,
          "source": "WY",
          "dest": "GA"
      },
      {
          "date": "2021-02-21T04:40:55.625Z",
          "due": "4h14m",
          "operator": "Ride SMART",
          "busId": "GLI27376",
          "price": "38$",
          "seats": 20,
          "source": "IN",
          "dest": "ID"
      },
      {
          "date": "2021-01-08T08:01:54.384Z",
          "due": "4h51m",
          "operator": "Ride SMART",
          "busId": "GLI70523",
          "price": "32$",
          "seats": 16,
          "source": "LA",
          "dest": "KS"
      },
      {
          "date": "2021-03-11T15:37:31.360Z",
          "due": "4h58m",
          "operator": "Westcat",
          "busId": "GLI36060",
          "price": "40$",
          "seats": 30,
          "source": "WA",
          "dest": "RI"
      },
      {
          "date": "2021-02-01T18:38:39.784Z",
          "due": "3h33m",
          "operator": "Citilink",
          "busId": "GLI81240",
          "price": "15$",
          "seats": 18,
          "source": "SD",
          "dest": "ND"
      },
      {
          "date": "2021-01-16T12:48:10.609Z",
          "due": "3h47m",
          "operator": "Westcat",
          "busId": "GLI18004",
          "price": "26$",
          "seats": 27,
          "source": "PA",
          "dest": "NC"
      },
      {
          "date": "2021-02-16T22:30:34.674Z",
          "due": "4h21m",
          "operator": "Citilink",
          "busId": "GLI28401",
          "price": "13$",
          "seats": 16,
          "source": "MI",
          "dest": "LA"
      },
      {
          "date": "2021-01-10T13:54:11.506Z",
          "due": "3h7m",
          "operator": "Ride SMART",
          "busId": "GLI74465",
          "price": "12$",
          "seats": 26,
          "source": "OH",
          "dest": "DE"
      },
      {
          "date": "2021-01-12T05:36:17.237Z",
          "due": "4h15m",
          "operator": "Ride SMART",
          "busId": "GLI93978",
          "price": "18$",
          "seats": 29,
          "source": "NE",
          "dest": "MS"
      },
      {
          "date": "2021-01-22T16:54:21.802Z",
          "due": "4h46m",
          "operator": "Ride SMART",
          "busId": "GLI30772",
          "price": "24$",
          "seats": 15,
          "source": "NM",
          "dest": "GA"
      },
      {
          "date": "2021-02-14T04:30:45.709Z",
          "due": "4h49m",
          "operator": "Citilink",
          "busId": "GLI15907",
          "price": "14$",
          "seats": 25,
          "source": "FL",
          "dest": "NM"
      },
      {
          "date": "2021-01-30T03:15:57.161Z",
          "due": "4h50m",
          "operator": "Ride SMART",
          "busId": "GLI84017",
          "price": "18$",
          "seats": 22,
          "source": "NE",
          "dest": "CO"
      },
      {
          "date": "2021-02-06T17:24:46.437Z",
          "due": "3h23m",
          "operator": "Ride SMART",
          "busId": "GLI60614",
          "price": "35$",
          "seats": 19,
          "source": "MA",
          "dest": "DE"
      },
      {
          "date": "2021-03-01T14:05:48.470Z",
          "due": "4h50m",
          "operator": "Citilink",
          "busId": "GLI14357",
          "price": "29$",
          "seats": 32,
          "source": "WY",
          "dest": "CO"
      },
      {
          "date": "2021-01-11T23:23:14.670Z",
          "due": "4h21m",
          "operator": "Ride SMART",
          "busId": "GLI65686",
          "price": "15$",
          "seats": 17,
          "source": "AR",
          "dest": "NC"
      },
      {
          "date": "2021-02-16T06:46:36.798Z",
          "due": "4h27m",
          "operator": "Citilink",
          "busId": "GLI57678",
          "price": "13$",
          "seats": 29,
          "source": "SD",
          "dest": "PA"
      },
      {
          "date": "2021-02-25T06:58:54.898Z",
          "due": "5h42m",
          "operator": "Ride SMART",
          "busId": "GLI93687",
          "price": "17$",
          "seats": 29,
          "source": "NV",
          "dest": "NV"
      },
      {
          "date": "2021-02-10T04:03:31.965Z",
          "due": "5h55m",
          "operator": "Westcat",
          "busId": "GLI50839",
          "price": "33$",
          "seats": 32,
          "source": "NC",
          "dest": "NE"
      },
      {
          "date": "2021-01-25T04:45:45.713Z",
          "due": "5h51m",
          "operator": "Citilink",
          "busId": "GLI37516",
          "price": "39$",
          "seats": 20,
          "source": "WA",
          "dest": "ID"
      },
      {
          "date": "2021-02-19T14:12:10.617Z",
          "due": "4h20m",
          "operator": "Citilink",
          "busId": "GLI91180",
          "price": "27$",
          "seats": 21,
          "source": "AR",
          "dest": "VA"
      },
      {
          "date": "2021-01-31T06:40:14.516Z",
          "due": "5h20m",
          "operator": "Ride SMART",
          "busId": "GLI61858",
          "price": "39$",
          "seats": 21,
          "source": "AL",
          "dest": "SC"
      },
      {
          "date": "2021-02-19T07:51:50.345Z",
          "due": "3h32m",
          "operator": "Ride SMART",
          "busId": "GLI97508",
          "price": "13$",
          "seats": 35,
          "source": "VA",
          "dest": "GA"
      },
      {
          "date": "2021-01-21T07:19:57.458Z",
          "due": "4h59m",
          "operator": "Westcat",
          "busId": "GLI68160",
          "price": "16$",
          "seats": 40,
          "source": "DE",
          "dest": "MI"
      },
      {
          "date": "2021-01-11T05:01:00.075Z",
          "due": "5h13m",
          "operator": "Citilink",
          "busId": "GLI86875",
          "price": "26$",
          "seats": 26,
          "source": "WA",
          "dest": "CA"
      },
      {
          "date": "2021-01-23T12:53:07.057Z",
          "due": "5h26m",
          "operator": "Citilink",
          "busId": "GLI48667",
          "price": "39$",
          "seats": 32,
          "source": "NE",
          "dest": "VA"
      },
      {
          "date": "2021-01-01T15:01:33.289Z",
          "due": "4h51m",
          "operator": "Westcat",
          "busId": "GLI65297",
          "price": "13$",
          "seats": 20,
          "source": "CA",
          "dest": "KY"
      },
      {
          "date": "2021-01-09T18:39:25.014Z",
          "due": "4h57m",
          "operator": "Citilink",
          "busId": "GLI84791",
          "price": "22$",
          "seats": 38,
          "source": "AL",
          "dest": "AZ"
      },
      {
          "date": "2021-01-19T09:31:10.060Z",
          "due": "3h12m",
          "operator": "Citilink",
          "busId": "GLI70565",
          "price": "39$",
          "seats": 24,
          "source": "LA",
          "dest": "GA"
      },
      {
          "date": "2021-01-12T06:41:37.286Z",
          "due": "4h22m",
          "operator": "Citilink",
          "busId": "GLI72745",
          "price": "27$",
          "seats": 20,
          "source": "IL",
          "dest": "RI"
      },
      {
          "date": "2021-01-24T01:08:51.988Z",
          "due": "4h14m",
          "operator": "Westcat",
          "busId": "GLI40867",
          "price": "37$",
          "seats": 38,
          "source": "OK",
          "dest": "NH"
      },
      {
          "date": "2021-03-09T10:28:31.440Z",
          "due": "5h4m",
          "operator": "Westcat",
          "busId": "GLI83411",
          "price": "35$",
          "seats": 21,
          "source": "NV",
          "dest": "IN"
      },
      {
          "date": "2021-01-11T12:05:25.028Z",
          "due": "3h57m",
          "operator": "Westcat",
          "busId": "GLI17122",
          "price": "19$",
          "seats": 40,
          "source": "AK",
          "dest": "NJ"
      },
      {
          "date": "2021-01-27T01:04:19.640Z",
          "due": "4h16m",
          "operator": "Ride SMART",
          "busId": "GLI90249",
          "price": "33$",
          "seats": 38,
          "dest": "MT"
      },
      {
          "date": "2021-03-10T10:52:32.193Z",
          "due": "4h10m",
          "operator": "Ride SMART",
          "busId": "GLI59172",
          "price": "12$",
          "seats": 18,
          "source": "WA",
          "dest": "OK"
      },
      {
          "date": "2021-01-23T16:42:17.668Z",
          "due": "3h26m",
          "operator": "Citilink",
          "busId": "GLI32778",
          "price": "20$",
          "seats": 35,
          "source": "AR"
      },
      {
          "date": "2021-01-05T08:54:08.825Z",
          "due": "5h34m",
          "operator": "Citilink",
          "busId": "GLI16698",
          "price": "36$",
          "seats": 30,
          "source": "NH",
          "dest": "WA"
      },
      {
          "date": "2021-01-17T22:42:42.333Z",
          "due": "3h58m",
          "operator": "Westcat",
          "busId": "GLI79208",
          "price": "10$",
          "seats": 29,
          "source": "NC",
          "dest": "AL"
      },
      {
          "date": "2021-01-06T07:30:00.258Z",
          "due": "5h33m",
          "operator": "Citilink",
          "busId": "GLI69938",
          "price": "12$",
          "seats": 39,
          "source": "TN",
          "dest": "KS"
      },
      {
          "date": "2021-01-23T19:58:36.385Z",
          "due": "3h42m",
          "operator": "Ride SMART",
          "busId": "GLI47721",
          "price": "28$",
          "seats": 22,
          "source": "MN",
          "dest": "AR"
      },
      {
          "date": "2021-03-09T22:41:16.502Z",
          "due": "4h21m",
          "operator": "Citilink",
          "busId": "GLI53300",
          "price": "17$",
          "seats": 30,
          "source": "CO",
          "dest": "GA"
      },
      {
          "date": "2021-01-13T18:42:41.246Z",
          "due": "5h46m",
          "operator": "Westcat",
          "busId": "GLI13468",
          "price": "29$",
          "seats": 21,
          "source": "FL",
          "dest": "UT"
      },
      {
          "date": "2021-01-28T07:34:56.699Z",
          "due": "5h58m",
          "operator": "Ride SMART",
          "busId": "GLI95496",
          "price": "17$",
          "seats": 29,
          "source": "MD",
          "dest": "GA"
      },
      {
          "date": "2021-02-16T21:24:45.957Z",
          "due": "4h24m",
          "operator": "Westcat",
          "busId": "GLI45965",
          "price": "35$",
          "seats": 37,
          "source": "NY",
          "dest": "CO"
      },
      {
          "date": "2021-02-17T01:42:20.960Z",
          "due": "3h59m",
          "operator": "Westcat",
          "busId": "GLI81809",
          "price": "19$",
          "seats": 16,
          "source": "PA",
          "dest": "NV"
      },
      {
          "date": "2021-01-07T13:26:09.342Z",
          "due": "4h21m",
          "operator": "Ride SMART",
          "busId": "GLI19240",
          "price": "35$",
          "seats": 25,
          "source": "TX",
          "dest": "NH"
      },
      {
          "date": "2021-02-16T16:40:25.846Z",
          "due": "4h57m",
          "operator": "Citilink",
          "busId": "GLI15401",
          "price": "36$",
          "seats": 32,
          "source": "NM",
          "dest": "NY"
      },
      {
          "date": "2021-01-21T15:47:13.992Z",
          "due": "5h20m",
          "operator": "Ride SMART",
          "busId": "GLI90477",
          "price": "30$",
          "seats": 31,
          "source": "CT",
          "dest": "MO"
      },
      {
          "date": "2021-01-27T17:27:43.514Z",
          "due": "5h52m",
          "operator": "Westcat",
          "busId": "GLI47046",
          "price": "10$",
          "seats": 19,
          "source": "ID",
          "dest": "SD"
      },
      {
          "date": "2021-03-01T12:01:53.547Z",
          "due": "3h47m",
          "operator": "Citilink",
          "busId": "GLI71389",
          "price": "25$",
          "seats": 30,
          "source": "OR",
          "dest": "ID"
      },
      {
          "date": "2021-01-01T20:46:34.084Z",
          "due": "4h29m",
          "operator": "Citilink",
          "busId": "GLI96229",
          "price": "12$",
          "seats": 37,
          "source": "TN",
          "dest": "KY"
      },
      {
          "date": "2021-02-20T10:30:46.638Z",
          "due": "4h10m",
          "operator": "Westcat",
          "busId": "GLI50420",
          "price": "12$",
          "seats": 38,
          "source": "AL",
          "dest": "OH"
      },
      {
          "date": "2021-03-09T17:24:00.262Z",
          "due": "5h23m",
          "operator": "Ride SMART",
          "busId": "GLI19172",
          "price": "11$",
          "seats": 16,
          "source": "HI",
          "dest": "GA"
      },
      {
          "date": "2021-01-09T16:28:15.626Z",
          "due": "5h58m",
          "operator": "Citilink",
          "busId": "GLI92697",
          "price": "29$",
          "seats": 23,
          "source": "AR",
          "dest": "MI"
      },
      {
          "date": "2021-01-17T03:35:10.647Z",
          "due": "4h42m",
          "operator": "Citilink",
          "busId": "GLI24126",
          "price": "14$",
          "seats": 33,
          "source": "GA"
      },
      {
          "date": "2021-01-31T10:27:32.892Z",
          "due": "4h17m",
          "operator": "Westcat",
          "busId": "GLI92267",
          "price": "20$",
          "seats": 15,
          "source": "MN",
          "dest": "WI"
      },
      {
          "date": "2021-01-15T18:50:43.732Z",
          "due": "3h13m",
          "operator": "Citilink",
          "busId": "GLI74840",
          "price": "25$",
          "seats": 28,
          "source": "HI",
          "dest": "DE"
      },
      {
          "date": "2021-01-19T15:33:36.639Z",
          "due": "5h49m",
          "operator": "Ride SMART",
          "busId": "GLI54817",
          "price": "35$",
          "seats": 19,
          "source": "OK",
          "dest": "ID"
      },
      {
          "date": "2021-02-07T05:43:46.074Z",
          "due": "5h17m",
          "operator": "Ride SMART",
          "busId": "GLI81980",
          "price": "19$",
          "seats": 28,
          "source": "MO",
          "dest": "OR"
      },
      {
          "date": "2021-02-17T03:58:20.514Z",
          "due": "5h2m",
          "operator": "Westcat",
          "busId": "GLI38021",
          "price": "30$",
          "seats": 39,
          "source": "NE",
          "dest": "VT"
      },
      {
          "date": "2021-03-12T04:50:07.333Z",
          "due": "3h35m",
          "operator": "Citilink",
          "busId": "GLI77215",
          "price": "35$",
          "seats": 15,
          "source": "MI",
          "dest": "KS"
      },
      {
          "date": "2021-01-08T01:45:48.949Z",
          "due": "4h39m",
          "operator": "Westcat",
          "busId": "GLI59237",
          "price": "24$",
          "seats": 32,
          "source": "MI",
          "dest": "OH"
      },
      {
          "date": "2021-01-05T05:28:30.460Z",
          "due": "4h13m",
          "operator": "Ride SMART",
          "busId": "GLI45306",
          "price": "17$",
          "seats": 18,
          "source": "KY",
          "dest": "MT"
      },
      {
          "date": "2021-02-05T16:07:12.061Z",
          "due": "3h39m",
          "operator": "Citilink",
          "busId": "GLI29934",
          "price": "19$",
          "seats": 18,
          "source": "OK",
          "dest": "FL"
      },
      {
          "date": "2021-02-24T09:42:02.002Z",
          "due": "3h29m",
          "operator": "Westcat",
          "busId": "GLI73554",
          "price": "31$",
          "seats": 18,
          "source": "NJ",
          "dest": "LA"
      },
      {
          "date": "2021-02-23T16:30:33.584Z",
          "due": "3h36m",
          "operator": "Ride SMART",
          "busId": "GLI78634",
          "price": "36$",
          "seats": 24,
          "source": "IN",
          "dest": "ID"
      },
      {
          "date": "2021-02-18T09:09:15.316Z",
          "due": "4h37m",
          "operator": "Citilink",
          "busId": "GLI55968",
          "price": "23$",
          "seats": 37,
          "source": "VT",
          "dest": "TX"
      },
      {
          "date": "2021-01-09T23:24:17.966Z",
          "due": "5h22m",
          "operator": "Citilink",
          "busId": "GLI62508",
          "price": "13$",
          "seats": 28,
          "source": "AZ",
          "dest": "OH"
      },
      {
          "date": "2021-01-07T16:29:44.022Z",
          "due": "5h8m",
          "operator": "Westcat",
          "busId": "GLI67081",
          "price": "16$",
          "seats": 39,
          "source": "CT",
          "dest": "ID"
      },
      {
          "date": "2021-02-07T10:45:53.484Z",
          "due": "4h13m",
          "operator": "Westcat",
          "busId": "GLI31839",
          "price": "17$",
          "seats": 15,
          "source": "ID",
          "dest": "AR"
      },
      {
          "date": "2021-01-05T10:19:02.297Z",
          "due": "3h27m",
          "operator": "Citilink",
          "busId": "GLI60161",
          "price": "32$",
          "seats": 23,
          "source": "NJ",
          "dest": "NV"
      },
      {
          "date": "2021-03-04T08:56:04.952Z",
          "due": "3h13m",
          "operator": "Citilink",
          "busId": "GLI35493",
          "price": "17$",
          "seats": 25,
          "source": "ID",
          "dest":""
      },
      {
          "date": "2021-01-10T19:47:02.762Z",
          "due": "3h5m",
          "operator": "Citilink",
          "busId": "GLI15389",
          "price": "22$",
          "seats": 38,
          "source": "SD",
          "dest": "NC"
      },
      {
          "date": "2021-02-14T10:58:15.069Z",
          "due": "4h21m",
          "operator": "Ride SMART",
          "busId": "GLI57831",
          "price": "27$",
          "seats": 40,
          "source": "FL",
          "dest": "MT"
      },
      {
          "date": "2021-01-30T12:00:20.933Z",
          "due": "5h44m",
          "operator": "Citilink",
          "busId": "GLI85738",
          "price": "33$",
          "seats": 25,
          "source":"",
          "dest": "WY"
      },
      {
          "date": "2021-02-13T14:29:48.303Z",
          "due": "3h39m",
          "operator": "Ride SMART",
          "busId": "GLI80944",
          "price": "11$",
          "seats": 17,
          "source": "HI",
          "dest": "NH"
      },
      {
          "date": "2021-01-30T20:20:31.359Z",
          "due": "4h39m",
          "operator": "Citilink",
          "busId": "GLI56558",
          "price": "29$",
          "seats": 36,
          "source": "IN",
          "dest": "PA"
      },
      {
          "date": "2021-01-05T18:13:24.350Z",
          "due": "5h55m",
          "operator": "Ride SMART",
          "busId": "GLI45572",
          "price": "32$",
          "seats": 20,
          "source": "LA",
          "dest": "ID"
      },
      {
          "date": "2021-01-20T20:45:54.451Z",
          "due": "5h39m",
          "operator": "Ride SMART",
          "busId": "GLI65623",
          "price": "40$",
          "seats": 29,
          "source": "PA",
          "dest": "NM"
      },
      {
          "date": "2021-03-03T22:59:28.252Z",
          "due": "4h55m",
          "operator": "Citilink",
          "busId": "GLI54663",
          "price": "16$",
          "seats": 37,
          "source": "FL",
          "dest": "SD"
      },
      {
          "date": "2021-02-23T00:21:53.598Z",
          "due": "3h55m",
          "operator": "Westcat",
          "busId": "GLI71279",
          "price": "18$",
          "seats": 34,
          "source": "LA",
          "dest": "MI"
      },
      {
          "date": "2021-01-19T10:35:54.386Z",
          "due": "3h21m",
          "operator": "Westcat",
          "busId": "GLI27029",
          "price": "19$",
          "seats": 21,
          "source": "OR",
          "dest": "OH"
      },
      {
          "date": "2021-01-24T00:36:25.835Z",
          "due": "4h24m",
          "operator": "Ride SMART",
          "busId": "GLI79055",
          "price": "40$",
          "seats": 35,
          "source": "IN",
          "dest": "HI"
      },
      {
          "date": "2021-01-07T01:33:30.297Z",
          "due": "4h59m",
          "operator": "Citilink",
          "busId": "GLI66364",
          "price": "32$",
          "seats": 15,
          "source": "TN",
          "dest": "NY"
      },
      {
          "date": "2021-03-09T06:16:18.363Z",
          "due": "5h35m",
          "operator": "Westcat",
          "busId": "GLI30934",
          "price": "39$",
          "seats": 36,
          "source": "CA",
          "dest": "KY"
      },
      {
          "date": "2021-02-24T05:48:07.355Z",
          "due": "4h52m",
          "operator": "Westcat",
          "busId": "GLI51692",
          "price": "21$",
          "seats": 24,
          "source": "SC",
          "dest": "AZ"
      },
      {
          "date": "2021-02-08T23:23:54.683Z",
          "due": "3h55m",
          "operator": "Ride SMART",
          "busId": "GLI32610",
          "price": "40$",
          "seats": 27,
          "source": "NC",
          "dest": "WI"
      },
      {
          "date": "2021-02-08T16:58:28.160Z",
          "due": "3h22m",
          "operator": "Westcat",
          "busId": "GLI18999",
          "price": "12$",
          "seats": 27,
          "source": "NY",
          "dest": "MI"
      },
      {
          "date": "2021-01-16T04:01:43.984Z",
          "due": "3h47m",
          "operator": "Citilink",
          "busId": "GLI81578",
          "price": "38$",
          "source": "",
          "seats": 16,
          "dest": "IL"
      },
      {
          "date": "2021-02-13T01:13:45.752Z",
          "due": "5h56m",
          "operator": "Westcat",
          "busId": "GLI68888",
          "price": "14$",
          "seats": 38,
          "source": "NJ",
          "dest": "AL"
      },
      {
          "date": "2021-02-27T08:10:24.943Z",
          "due": "3h25m",
          "operator": "Citilink",
          "busId": "GLI55620",
          "price": "33$",
          "seats": 17,
          "source": "OK",
          "dest": "NH"
      },
      {
          "date": "2021-01-08T12:04:21.582Z",
          "due": "5h50m",
          "operator": "Citilink",
          "busId": "GLI69247",
          "price": "40$",
          "seats": 16,
          "source": "RI",
          "dest": "GA"
      },
      {
          "date": "2021-01-13T14:25:00.986Z",
          "due": "3h11m",
          "operator": "Ride SMART",
          "busId": "GLI32835",
          "price": "35$",
          "seats": 25,
          "source": "VA",
          "dest": "OH"
      },
      {
          "date": "2021-01-18T10:54:00.417Z",
          "due": "3h25m",
          "operator": "Ride SMART",
          "busId": "GLI12453",
          "price": "25$",
          "seats": 31,
          "source": "VT",
          "dest": "PA"
      },
      {
          "date": "2021-02-19T21:46:27.136Z",
          "due": "4h25m",
          "operator": "Westcat",
          "busId": "GLI90100",
          "price": "33$",
          "seats": 19,
          "source": "NM",
          "dest": "AK"
      },
      {
          "date": "2021-02-21T00:09:21.489Z",
          "due": "3h43m",
          "operator": "Westcat",
          "busId": "GLI58074",
          "price": "25$",
          "seats": 30,
          "source": "WA",
          "dest": "MT"
      },
      {
          "date": "2021-01-04T01:44:25.447Z",
          "due": "3h23m",
          "operator": "Citilink",
          "busId": "GLI19549",
          "price": "32$",
          "seats": 17,
          "source": "OK",
          "dest": "HI"
      },
      {
          "date": "2021-02-08T00:45:17.599Z",
          "due": "5h40m",
          "operator": "Westcat",
          "busId": "GLI74102",
          "price": "15$",
          "seats": 25,
          "source": "ND",
          "dest": "DE"
      },
      {
          "date": "2021-02-02T11:19:50.745Z",
          "due": "3h46m",
          "operator": "Citilink",
          "busId": "GLI48687",
          "price": "27$",
          "seats": 16,
          "source": "WA",
          "dest": "TX"
      },
      {
          "date": "2021-02-26T19:07:18.370Z",
          "due": "4h44m",
          "operator": "Citilink",
          "busId": "GLI97026",
          "price": "26$",
          "seats": 27,
          "source": "UT",
          "dest": "ID"
      },
      {
          "date": "2021-01-30T03:58:41.589Z",
          "due": "3h45m",
          "operator": "Ride SMART",
          "busId": "GLI34583",
          "price": "25$",
          "seats": 39,
          "source": "KS",
          "dest": "TX"
      },
      {
          "date": "2021-02-18T16:12:15.220Z",
          "due": "3h9m",
          "operator": "Citilink",
          "busId": "GLI47936",
          "price": "17$",
          "seats": 38,
          "source": "NE",
          "dest": "DE"
      },
      {
          "date": "2021-02-17T05:20:02.457Z",
          "due": "5h54m",
          "operator": "Citilink",
          "busId": "GLI89060",
          "price": "26$",
          "seats": 19,
          "source": "NJ",
          "dest": "WA"
      },
      {
          "date": "2021-01-19T21:57:47.607Z",
          "due": "3h27m",
          "operator": "Citilink",
          "busId": "GLI91398",
          "price": "32$",
          "source": "",
          "seats": 21,
          "dest": "UT"
      },
      {
          "date": "2021-03-02T05:35:42.482Z",
          "due": "4h52m",
          "operator": "Citilink",
          "busId": "GLI99100",
          "price": "14$",
          "seats": 20,
          "source": "NM",
          "dest": "DE"
      },
      {
          "date": "2021-02-11T09:49:45.669Z",
          "due": "4h48m",
          "operator": "Westcat",
          "busId": "GLI84579",
          "price": "39$",
          "seats": 20,
          "source": "SD",
          "dest": "NE"
      },
      {
          "date": "2021-02-21T17:25:25.779Z",
          "due": "4h13m",
          "operator": "Westcat",
          "busId": "GLI51024",
          "price": "36$",
          "seats": 26,
          "source": "OK",
          "dest": "KS"
      },
      {
          "date": "2021-02-18T16:48:50.018Z",
          "due": "4h9m",
          "operator": "Ride SMART",
          "busId": "GLI42384",
          "price": "10$",
          "seats": 32,
          "source": "CO",
          "dest": "RI"
      },
      {
          "date": "2021-02-23T10:32:53.631Z",
          "due": "3h46m",
          "operator": "Westcat",
          "busId": "GLI63081",
          "price": "36$",
          "seats": 22,
          "source": "ME",
          "dest": "KY"
      },
      {
          "date": "2021-01-18T10:48:18.878Z",
          "due": "5h18m",
          "operator": "Westcat",
          "busId": "GLI70768",
          "price": "18$",
          "seats": 23,
          "source": "NV",
          "dest": "MA"
      },
      {
          "date": "2021-03-03T19:09:34.496Z",
          "due": "3h4m",
          "operator": "Citilink",
          "busId": "GLI29777",
          "price": "32$",
          "seats": 16,
          "source": "CO",
          "dest": "VT"
      },
      {
          "date": "2021-03-06T12:46:53.402Z",
          "due": "5h28m",
          "operator": "Citilink",
          "busId": "GLI62509",
          "price": "31$",
          "seats": 31,
          "source": "KY",
          "dest": "NV"
      },
      {
          "date": "2021-01-20T23:01:18.803Z",
          "due": "3h58m",
          "operator": "Citilink",
          "busId": "GLI28108",
          "price": "14$",
          "seats": 19,
          "source": "DE",
          "dest": "OK"
      },
      {
          "date": "2021-02-25T03:59:06.700Z",
          "due": "5h49m",
          "operator": "Westcat",
          "busId": "GLI26288",
          "price": "14$",
          "seats": 17,
          "source": "UT",
          "dest": "KS"
      },
      {
          "date": "2021-01-24T18:55:55.116Z",
          "due": "3h34m",
          "operator": "Westcat",
          "busId": "GLI96552",
          "price": "33$",
          "seats": 23,
          "source": "VT",
          "dest": ""
      },
      {
          "date": "2021-01-08T16:13:01.657Z",
          "due": "5h29m",
          "operator": "Ride SMART",
          "busId": "GLI82107",
          "price": "36$",
          "seats": 37,
          "source": "PA",
          "dest": "OK"
      },
      {
          "date": "2021-03-04T13:55:58.912Z",
          "due": "4h44m",
          "operator": "Westcat",
          "busId": "GLI60654",
          "price": "13$",
          "seats": 29,
          "source": "OR",
          "dest": "WY"
      },
      {
          "date": "2021-02-22T05:53:36.574Z",
          "due": "4h14m",
          "operator": "Citilink",
          "busId": "GLI62763",
          "price": "18$",
          "seats": 39,
          "source": "PA",
          "dest": "TN"
      },
      {
          "date": "2021-03-11T12:40:02.997Z",
          "due": "4h7m",
          "operator": "Westcat",
          "busId": "GLI95067",
          "price": "10$",
          "seats": 22,
          "source": "TX",
          "dest": "ID"
      },
      {
          "date": "2021-01-30T15:39:09.225Z",
          "due": "5h42m",
          "operator": "Citilink",
          "busId": "GLI19027",
          "price": "28$",
          "seats": 24,
          "source": "ME",
          "dest": "AL"
      },
      {
          "date": "2021-02-25T00:59:23.499Z",
          "due": "3h21m",
          "operator": "Ride SMART",
          "busId": "GLI32290",
          "price": "20$",
          "seats": 32,
          "source": "VT",
          "dest": "WA"
      },
      {
          "date": "2021-01-30T01:51:15.586Z",
          "due": "5h18m",
          "operator": "Westcat",
          "busId": "GLI57929",
          "price": "33$",
          "seats": 29,
          "source": "RI",
          "dest": "MT"
      },
      {
          "date": "2021-01-22T22:08:36.853Z",
          "due": "5h31m",
          "operator": "Citilink",
          "busId": "GLI37342",
          "price": "22$",
          "seats": 24,
          "source": "ND",
          "dest": "RI"
      },
      {
          "date": "2021-02-14T09:02:35.981Z",
          "due": "5h24m",
          "operator": "Citilink",
          "busId": "GLI17257",
          "price": "13$",
          "seats": 32,
          "source": "AL",
          "dest": "MD"
      },
      {
          "date": "2021-02-10T12:01:58.906Z",
          "due": "3h12m",
          "operator": "Citilink",
          "busId": "GLI87137",
          "price": "31$",
          "seats": 15,
          "source": "CA",
          "dest": "MD"
      },
      {
          "date": "2021-01-03T04:39:13.720Z",
          "due": "5h3m",
          "operator": "Westcat",
          "busId": "GLI48112",
          "price": "16$",
          "seats": 25,
          "source": "OK",
          "dest": "TX"
      },
      {
          "date": "2021-02-02T23:10:36.541Z",
          "due": "3h28m",
          "operator": "Westcat",
          "busId": "GLI40750",
          "price": "21$",
          "seats": 18,
          "source": "VA",
          "dest": "IL"
      },
      {
          "date": "2021-03-12T01:17:44.231Z",
          "due": "3h34m",
          "operator": "Citilink",
          "busId": "GLI48600",
          "price": "35$",
          "seats": 21,
          "source": "AL",
          "dest": "MO"
      },
      {
          "date": "2021-02-20T11:48:27.986Z",
          "due": "3h57m",
          "operator": "Westcat",
          "busId": "GLI21077",
          "price": "36$",
          "seats": 25,
          "source": "MI",
          "dest": "MI"
      },
      {
          "date": "2021-03-09T05:27:45.086Z",
          "due": "5h23m",
          "operator": "Westcat",
          "busId": "GLI18598",
          "price": "19$",
          "seats": 37,
          "source": "HI",
          "dest": "MA"
      },
      {
          "date": "2021-03-03T05:30:12.511Z",
          "due": "4h53m",
          "operator": "Westcat",
          "busId": "GLI69890",
          "price": "20$",
          "seats": 40,
          "source": "NM",
          "dest": "AZ"
      },
      {
          "date": "2021-01-11T01:50:33.280Z",
          "due": "4h13m",
          "operator": "Westcat",
          "busId": "GLI24528",
          "price": "28$",
          "seats": 28,
          "source": "GA",
          "dest": "TX"
      },
      {
          "date": "2021-01-26T17:15:53.626Z",
          "due": "4h58m",
          "operator": "Ride SMART",
          "busId": "GLI32032",
          "price": "39$",
          "seats": 39,
          "source": "NY",
          "dest": ""
      },
      {
          "date": "2021-02-17T07:08:11.882Z",
          "due": "4h17m",
          "operator": "Ride SMART",
          "busId": "GLI82661",
          "price": "36$",
          "seats": 22,
          "source": "ME",
          "dest": "SC"
      },
      {
          "date": "2021-03-04T16:51:53.347Z",
          "due": "5h29m",
          "operator": "Ride SMART",
          "busId": "GLI48184",
          "price": "12$",
          "seats": 27,
          "source": "RI",
          "dest": "NV"
      },
      {
          "date": "2021-02-26T04:11:54.195Z",
          "due": "4h19m",
          "operator": "Citilink",
          "busId": "GLI59396",
          "price": "36$",
          "seats": 27,
          "source": "OR",
          "dest": "NE"
      },
      {
          "date": "2021-02-17T13:46:47.506Z",
          "due": "4h9m",
          "operator": "Westcat",
          "busId": "GLI34691",
          "price": "12$",
          "seats": 15,
          "source": "RI",
          "dest": "NC"
      },
      {
          "date": "2021-02-19T11:31:15.241Z",
          "due": "4h5m",
          "operator": "Ride SMART",
          "busId": "GLI94302",
          "price": "38$",
          "seats": 31,
          "source": "VA",
          "dest": "NY"
      },
      {
          "date": "2021-01-31T05:49:25.251Z",
          "due": "5h33m",
          "operator": "Westcat",
          "busId": "GLI40151",
          "price": "25$",
          "seats": 34,
          "source": "IA",
          "dest": "MN"
      },
      {
          "date": "2021-02-20T07:57:41.983Z",
          "due": "4h53m",
          "operator": "Citilink",
          "busId": "GLI40859",
          "price": "17$",
          "seats": 35,
          "source": "KS",
          "dest": "CT"
      },
      {
          "date": "2021-01-30T14:45:17.300Z",
          "due": "4h43m",
          "operator": "Citilink",
          "busId": "GLI62115",
          "price": "27$",
          "seats": 39,
          "source": "SD",
          "dest": "ME"
      },
      {
          "date": "2021-03-02T19:17:54.105Z",
          "due": "3h16m",
          "operator": "Westcat",
          "busId": "GLI65888",
          "price": "15$",
          "seats": 29,
          "source": "TX",
          "dest": "IA"
      },
      {
          "date": "2021-01-21T03:33:38.773Z",
          "due": "3h34m",
          "operator": "Westcat",
          "busId": "GLI19135",
          "price": "25$",
          "seats": 25,
          "source": "AL",
          "dest": "CO"
      },
      {
          "date": "2021-02-12T12:22:11.489Z",
          "due": "5h13m",
          "operator": "Citilink",
          "busId": "GLI31154",
          "price": "30$",
          "seats": 21,
          "source": "HI",
          "dest": "CA"
      },
      {
          "date": "2021-01-07T00:30:29.727Z",
          "due": "5h4m",
          "operator": "Ride SMART",
          "busId": "GLI15214",
          "price": "27$",
          "seats": 37,
          "source": "NY",
          "dest": "ID"
      },
      {
          "date": "2021-01-26T04:31:48.956Z",
          "due": "5h48m",
          "operator": "Ride SMART",
          "busId": "GLI30809",
          "price": "30$",
          "seats": 23,
          "source": "SC",
          "dest": "KY"
      },
      {
          "date": "2021-03-06T02:53:22.489Z",
          "due": "5h7m",
          "operator": "Ride SMART",
          "busId": "GLI41500",
          "price": "12$",
          "seats": 19,
          "source": "OR",
          "dest": "FL"
      },
      {
          "date": "2021-01-08T18:38:13.296Z",
          "due": "4h16m",
          "operator": "Citilink",
          "busId": "GLI33023",
          "price": "20$",
          "seats": 15,
          "source": "OR",
          "dest": "WI"
      },
      {
          "date": "2021-01-26T02:48:19.293Z",
          "due": "3h54m",
          "operator": "Citilink",
          "busId": "GLI24067",
          "price": "32$",
          "seats": 31,
          "source": "DE",
          "dest": "LA"
      },
      {
          "date": "2021-02-20T05:49:16.163Z",
          "due": "4h33m",
          "operator": "Westcat",
          "busId": "GLI37217",
          "price": "18$",
          "seats": 28,
          "source": "NJ",
          "dest": "ME"
      },
      {
          "date": "2021-01-06T03:45:00.429Z",
          "due": "4h34m",
          "operator": "Ride SMART",
          "busId": "GLI97820",
          "price": "20$",
          "seats": 18,
          "source": "VA",
          "dest": "CA"
      },
      {
          "date": "2021-01-22T06:28:38.327Z",
          "due": "4h20m",
          "operator": "Westcat",
          "busId": "GLI13703",
          "price": "18$",
          "seats": 19,
          "source": "WI",
          "dest": "NE"
      },
      {
          "date": "2021-01-13T00:54:14.922Z",
          "due": "3h22m",
          "operator": "Citilink",
          "busId": "GLI13209",
          "price": "27$",
          "seats": 16,
          "source": "LA",
          "dest": "MN"
      },
      {
          "date": "2021-01-12T15:50:51.109Z",
          "due": "3h2m",
          "operator": "Citilink",
          "busId": "GLI98353",
          "price": "36$",
          "seats": 17,
          "source": "MS",
          "dest": "VT"
      },
      {
          "date": "2021-03-09T17:34:06.276Z",
          "due": "3h55m",
          "operator": "Ride SMART",
          "busId": "GLI90489",
          "price": "20$",
          "seats": 37,
          "source": "NH",
          "dest": "WA"
      },
      {
          "date": "2021-02-09T04:37:23.394Z",
          "due": "4h50m",
          "operator": "Citilink",
          "busId": "GLI71534",
          "price": "21$",
          "seats": 26,
          "source": "NV",
          "dest": "MN"
      },
      {
          "date": "2021-03-05T16:19:22.615Z",
          "due": "5h29m",
          "operator": "Citilink",
          "busId": "GLI12274",
          "price": "33$",
          "seats": 31,
          "source": "AL",
          "dest": "IL"
      },
      {
          "date": "2021-02-12T19:36:36.151Z",
          "due": "3h7m",
          "operator": "Westcat",
          "busId": "GLI89846",
          "price": "16$",
          "seats": 28,
          "source": "OH",
          "dest": "KS"
      },
      {
          "date": "2021-02-10T14:29:13.824Z",
          "due": "3h23m",
          "operator": "Westcat",
          "busId": "GLI58938",
          "price": "23$",
          "seats": 20,
          "source": "UT",
          "dest": "NH"
      },
      {
          "date": "2021-02-13T07:02:32.476Z",
          "due": "3h11m",
          "operator": "Ride SMART",
          "busId": "GLI79643",
          "price": "32$",
          "seats": 38,
          "source": "FL",
          "dest": "MA"
      },
      {
          "date": "2021-03-13T04:06:22.322Z",
          "due": "3h8m",
          "operator": "Citilink",
          "busId": "GLI61536",
          "price": "40$",
          "seats": 20,
          "source": "NH",
          "dest": "CA"
      },
      {
          "date": "2021-03-10T04:25:21.416Z",
          "due": "3h22m",
          "operator": "Ride SMART",
          "busId": "GLI51822",
          "price": "34$",
          "seats": 15,
          "source": "AR",
          "dest": "TN"
      },
      {
          "date": "2021-02-07T12:20:54.050Z",
          "due": "4h14m",
          "operator": "Citilink",
          "busId": "GLI50161",
          "price": "16$",
          "seats": 33,
          "source": "NE",
          "dest": "RI"
      },
      {
          "date": "2021-03-01T03:54:26.598Z",
          "due": "3h38m",
          "operator": "Westcat",
          "busId": "GLI98324",
          "price": "17$",
          "seats": 28,
          "source": "HI",
          "dest": "ID"
      },
      {
          "date": "2021-02-13T02:24:23.660Z",
          "due": "5h46m",
          "operator": "Westcat",
          "busId": "GLI29688",
          "price": "27$",
          "seats": 31,
          "source": "CT",
          "dest": "WA"
      },
      {
          "date": "2021-02-27T16:52:22.760Z",
          "due": "4h4m",
          "operator": "Ride SMART",
          "busId": "GLI50266",
          "price": "19$",
          "seats": 26,
          "source": "NE",
          "dest": "WY"
      },
      {
          "date": "2021-02-16T07:39:49.095Z",
          "due": "4h18m",
          "operator": "Citilink",
          "busId": "GLI47511",
          "price": "16$",
          "seats": 38,
          "source": "TX",
          "dest": "WV"
      },
      {
          "date": "2021-02-24T07:01:49.602Z",
          "due": "4h14m",
          "operator": "Ride SMART",
          "busId": "GLI64505",
          "price": "37$",
          "seats": 19,
          "source": "CT",
          "dest": "NM"
      },
      {
          "date": "2021-02-18T16:14:22.925Z",
          "due": "5h54m",
          "operator": "Ride SMART",
          "busId": "GLI62610",
          "price": "15$",
          "seats": 21,
          "source": "NE",
          "dest": "MO"
      },
      {
          "date": "2021-01-22T02:20:33.393Z",
          "due": "3h26m",
          "operator": "Westcat",
          "busId": "GLI45111",
          "price": "27$",
          "seats": 30,
          "source": "PA",
          "dest": "MI"
      },
      {
          "date": "2021-02-08T17:28:07.474Z",
          "due": "3h13m",
          "operator": "Ride SMART",
          "busId": "GLI49393",
          "price": "30$",
          "seats": 20,
          "source": "AK",
          "dest": "NY"
      },
      {
          "date": "2021-02-16T07:42:29.535Z",
          "due": "5h2m",
          "operator": "Ride SMART",
          "busId": "GLI23767",
          "price": "36$",
          "seats": 23,
          "source": "GA",
          "dest": "CA"
      },
      {
          "date": "2021-02-13T17:16:15.515Z",
          "due": "4h19m",
          "operator": "Westcat",
          "busId": "GLI47541",
          "price": "40$",
          "seats": 31,
          "source": "IA",
          "dest": "VA"
      },
      {
          "date": "2021-02-18T06:36:23.320Z",
          "due": "3h4m",
          "operator": "Citilink",
          "busId": "GLI43222",
          "price": "22$",
          "seats": 23,
          "source": "MN",
          "dest": "TN"
      },
      {
          "date": "2021-02-07T07:59:22.282Z",
          "due": "5h3m",
          "operator": "Westcat",
          "busId": "GLI14049",
          "price": "15$",
          "seats": 27,
          "source": "DE",
          "dest": "WV"
      },
      {
          "date": "2021-03-03T01:03:11.936Z",
          "due": "3h13m",
          "operator": "Citilink",
          "busId": "GLI85444",
          "price": "25$",
          "seats": 22,
          "source": "GA",
          "dest": "ME"
      },
      {
          "date": "2021-01-05T02:03:55.835Z",
          "due": "4h47m",
          "operator": "Westcat",
          "busId": "GLI75828",
          "price": "40$",
          "seats": 15,
          "source": "OH",
          "dest": "AL"
      },
      {
          "date": "2021-01-25T17:25:06.847Z",
          "due": "5h39m",
          "operator": "Ride SMART",
          "busId": "GLI93020",
          "price": "23$",
          "seats": 21,
          "source": "DE",
          "dest": "ND"
      },
      {
          "date": "2021-02-14T06:07:03.049Z",
          "due": "4h30m",
          "operator": "Citilink",
          "busId": "GLI67373",
          "price": "35$",
          "seats": 27,
          "source": "TX",
          "dest": "OK"
      },
      {
          "date": "2021-01-13T23:06:43.453Z",
          "due": "3h34m",
          "operator": "Ride SMART",
          "busId": "GLI38488",
          "price": "11$",
          "seats": 36,
          "source": "CT",
          "dest": "UT"
      },
      {
          "date": "2021-03-03T18:59:17.152Z",
          "due": "3h28m",
          "operator": "Westcat",
          "busId": "GLI65708",
          "price": "24$",
          "seats": 19,
          "source": "ND",
          "dest": "NH"
      },
      {
          "date": "2021-01-17T21:18:26.491Z",
          "due": "5h57m",
          "operator": "Westcat",
          "busId": "GLI36820",
          "price": "17$",
          "seats": 20,
          "source": "WV",
          "dest": "NV"
      },
      {
          "date": "2021-01-27T19:33:05.987Z",
          "due": "4h2m",
          "operator": "Westcat",
          "busId": "GLI74210",
          "price": "16$",
          "seats": 33,
          "source": "VT",
          "dest": "HI"
      },
      {
          "date": "2021-02-18T04:27:42.481Z",
          "due": "4h34m",
          "operator": "Citilink",
          "busId": "GLI66323",
          "price": "38$",
          "seats": 20,
          "source": "WA",
          "dest": "NC"
      },
      {
          "date": "2021-02-09T02:13:45.291Z",
          "due": "5h42m",
          "operator": "Ride SMART",
          "busId": "GLI59828",
          "price": "25$",
          "seats": 31,
          "source": "WY",
          "dest": "AZ"
      },
      {
          "date": "2021-01-25T01:56:27.281Z",
          "due": "4h54m",
          "operator": "Westcat",
          "busId": "GLI99741",
          "price": "20$",
          "seats": 30,
          "source": "UT",
          "dest": "WA"
      },
      {
          "date": "2021-02-22T00:17:12.100Z",
          "due": "4h4m",
          "operator": "Ride SMART",
          "busId": "GLI72384",
          "price": "35$",
          "seats": 28,
          "source": "PA",
          "dest": "NE"
      },
      {
          "date": "2021-02-05T12:12:09.073Z",
          "due": "5h48m",
          "operator": "Ride SMART",
          "busId": "GLI74534",
          "price": "23$",
          "seats": 33,
          "source": "AK",
          "dest": "NC"
      },
      {
          "date": "2021-03-04T12:07:25.875Z",
          "due": "5h16m",
          "operator": "Westcat",
          "busId": "GLI79606",
          "price": "31$",
          "seats": 29,
          "source": "RI",
          "dest": "AZ"
      },
      {
          "date": "2021-02-13T22:02:40.824Z",
          "due": "3h34m",
          "operator": "Citilink",
          "busId": "GLI17358",
          "price": "33$",
          "seats": 30,
          "source": "AL",
          "dest": "OK"
      },
      {
          "date": "2021-03-13T14:24:15.542Z",
          "due": "4h44m",
          "operator": "Westcat",
          "busId": "GLI47763",
          "price": "33$",
          "seats": 16,
          "source": "KS",
          "dest": "DE"
      },
      {
          "date": "2021-01-11T13:46:20.930Z",
          "due": "5h49m",
          "operator": "Citilink",
          "busId": "GLI35390",
          "price": "25$",
          "seats": 25,
          "dest": "LA"
      },
      {
          "date": "2021-01-22T06:21:47.158Z",
          "due": "3h14m",
          "operator": "Citilink",
          "busId": "GLI32140",
          "price": "11$",
          "seats": 36,
          "source": "NY",
          "dest": "SC"
      },
      {
          "date": "2021-03-11T02:27:43.722Z",
          "due": "4h28m",
          "operator": "Citilink",
          "busId": "GLI89149",
          "price": "15$",
          "seats": 17,
          "source": "MI",
          "dest": "DE"
      },
      {
          "date": "2021-02-17T14:50:22.575Z",
          "due": "5h41m",
          "operator": "Ride SMART",
          "busId": "GLI88122",
          "price": "15$",
          "seats": 31,
          "source": "CA",
          "dest": "AL"
      },
      {
          "date": "2021-03-04T01:08:56.517Z",
          "due": "3h41m",
          "operator": "Citilink",
          "busId": "GLI86970",
          "price": "19$",
          "seats": 21,
          "source": "VT",
          "dest": "NJ"
      },
      {
          "date": "2021-01-31T18:10:00.465Z",
          "due": "5h24m",
          "operator": "Ride SMART",
          "busId": "GLI73372",
          "price": "16$",
          "seats": 34,
          "source": "WI",
          "dest": "SC"
      },
      {
          "date": "2021-01-12T11:56:02.423Z",
          "due": "5h6m",
          "operator": "Citilink",
          "busId": "GLI71905",
          "price": "37$",
          "seats": 19,
          "source": "MI",
          "dest": "LA"
      },
      {
          "date": "2021-02-20T06:50:04.841Z",
          "due": "5h48m",
          "operator": "Citilink",
          "busId": "GLI51930",
          "price": "25$",
          "seats": 39,
          "source": "HI",
          "dest": "MO"
      },
      {
          "date": "2021-03-13T05:37:08.153Z",
          "due": "4h51m",
          "operator": "Ride SMART",
          "busId": "GLI84916",
          "price": "22$",
          "seats": 32,
          "source": "OR",
          "dest": "MD"
      },
      {
          "date": "2021-01-26T21:58:39.360Z",
          "due": "4h29m",
          "operator": "Ride SMART",
          "busId": "GLI25245",
          "price": "17$",
          "seats": 24,
          "source": "NY",
          "dest": "AK"
      },
      {
          "date": "2021-01-21T00:47:58.944Z",
          "due": "4h14m",
          "operator": "Citilink",
          "busId": "GLI42790",
          "price": "22$",
          "seats": 40,
          "source": "LA",
          "dest": "WA"
      },
      {
          "date": "2021-02-22T09:32:07.829Z",
          "due": "4h35m",
          "operator": "Westcat",
          "busId": "GLI27045",
          "price": "12$",
          "seats": 17,
          "source": "ID",
          "dest": "MI"
      },
      {
          "date": "2021-02-17T20:51:45.227Z",
          "due": "5h57m",
          "operator": "Ride SMART",
          "busId": "GLI69719",
          "price": "29$",
          "seats": 38,
          "source": "NM",
          "dest": "IN"
      },
      {
          "date": "2021-01-07T13:36:54.958Z",
          "due": "4h13m",
          "operator": "Citilink",
          "busId": "GLI13684",
          "price": "30$",
          "seats": 17,
          "source": "PA",
          "dest": "WY"
      },
      {
          "date": "2021-01-07T00:07:24.114Z",
          "due": "3h31m",
          "operator": "Westcat",
          "busId": "GLI78875",
          "price": "12$",
          "seats": 17,
          "source": "MT",
          "dest": "MT"
      },
      {
          "date": "2021-02-06T14:55:52.938Z",
          "due": "4h52m",
          "operator": "Westcat",
          "busId": "GLI56173",
          "price": "34$",
          "seats": 35,
          "source": "NV",
          "dest": "IL"
      },
      {
          "date": "2021-01-10T02:15:59.804Z",
          "due": "5h30m",
          "operator": "Citilink",
          "busId": "GLI32501",
          "price": "21$",
          "seats": 39,
          "source": "WI",
          "dest": "IN"
      },
      {
          "date": "2021-02-05T11:37:57.598Z",
          "due": "3h26m",
          "operator": "Ride SMART",
          "busId": "GLI56334",
          "price": "39$",
          "seats": 24,
          "source": "CO",
          "dest": "KS"
      },
      {
          "date": "2021-01-23T20:45:02.968Z",
          "due": "4h57m",
          "operator": "Citilink",
          "busId": "GLI19864",
          "price": "23$",
          "seats": 22,
          "source": "NJ",
          "dest": "MO"
      },
      {
          "date": "2021-02-13T07:44:16.705Z",
          "due": "4h23m",
          "operator": "Citilink",
          "busId": "GLI32190",
          "price": "29$",
          "seats": 22,
          "source": "KS",
          "dest": "NV"
      },
      {
          "date": "2021-03-13T10:07:25.787Z",
          "due": "3h28m",
          "operator": "Ride SMART",
          "busId": "GLI24163",
          "price": "17$",
          "seats": 37,
          "source": "AL",
          "dest": "TX"
      },
      {
          "date": "2021-03-06T08:05:18.769Z",
          "due": "5h48m",
          "operator": "Ride SMART",
          "busId": "GLI73083",
          "price": "18$",
          "seats": 28,
          "source": "VA",
          "dest": "ID"
      },
      {
          "date": "2021-02-23T12:45:51.039Z",
          "due": "5h57m",
          "operator": "Westcat",
          "busId": "GLI34504",
          "price": "12$",
          "seats": 37,
          "source": "KS",
          "dest": "OH"
      },
      {
          "date": "2021-02-13T23:55:42.973Z",
          "due": "5h52m",
          "operator": "Westcat",
          "busId": "GLI65961",
          "price": "16$",
          "seats": 36,
          "source": "OR",
          "dest": "IN"
      },
      {
          "date": "2021-02-22T02:42:42.723Z",
          "due": "3h43m",
          "operator": "Westcat",
          "busId": "GLI43905",
          "price": "32$",
          "seats": 37,
          "source": "RI",
          "dest": "AR"
      },
      {
          "date": "2021-02-22T06:52:08.152Z",
          "due": "5h12m",
          "operator": "Westcat",
          "busId": "GLI62899",
          "price": "32$",
          "seats": 17,
          "source": "KS",
          "dest": "MN"
      },
      {
          "date": "2021-01-10T12:25:48.798Z",
          "due": "5h31m",
          "operator": "Ride SMART",
          "busId": "GLI44271",
          "price": "12$",
          "seats": 28,
          "source": "SC",
          "dest": "DE"
      },
      {
          "date": "2021-01-03T16:14:10.917Z",
          "due": "4h54m",
          "operator": "Ride SMART",
          "busId": "GLI22226",
          "price": "29$",
          "seats": 29,
          "source": "ID",
          "dest": "MD"
      },
      {
          "date": "2021-01-15T19:16:18.873Z",
          "due": "4h12m",
          "operator": "Ride SMART",
          "busId": "GLI79729",
          "price": "31$",
          "seats": 31,
          "source": "VT",
          "dest": "ND"
      },
      {
          "date": "2021-01-29T08:42:57.215Z",
          "due": "5h15m",
          "operator": "Citilink",
          "busId": "GLI92000",
          "price": "12$",
          "seats": 32,
          "source": "OH",
          "dest": "AR"
      },
      {
          "date": "2021-02-07T21:46:27.643Z",
          "due": "4h2m",
          "operator": "Citilink",
          "busId": "GLI23581",
          "price": "21$",
          "seats": 26,
          "source": "MI",
          "dest": "SC"
      },
      {
          "date": "2021-02-13T10:51:58.914Z",
          "due": "5h35m",
          "operator": "Citilink",
          "busId": "GLI45033",
          "price": "21$",
          "seats": 34,
          "source": "HI",
          "dest": "MS"
      },
      {
          "date": "2021-01-26T02:28:59.120Z",
          "due": "4h34m",
          "operator": "Ride SMART",
          "busId": "GLI28307",
          "price": "28$",
          "seats": 35,
          "source": "MA",
          "dest": "NE"
      },
      {
          "date": "2021-03-10T10:27:14.615Z",
          "due": "3h2m",
          "operator": "Westcat",
          "busId": "GLI17207",
          "price": "40$",
          "seats": 39,
          "source": "FL",
          "dest": "WV"
      },
      {
          "date": "2021-02-07T19:59:23.633Z",
          "due": "3h54m",
          "operator": "Citilink",
          "busId": "GLI51407",
          "price": "32$",
          "seats": 35,
          "source": "AR",
          "dest": "ID"
      },
      {
          "date": "2021-01-13T17:09:17.529Z",
          "due": "4h21m",
          "operator": "Citilink",
          "busId": "GLI77301",
          "price": "28$",
          "seats": 24,
          "source": "LA",
          "dest": "DE"
      },
      {
          "date": "2021-01-05T07:23:45.240Z",
          "due": "4h47m",
          "operator": "Ride SMART",
          "busId": "GLI95893",
          "price": "32$",
          "seats": 20,
          "source": "LA",
          "dest": "KY"
      },
      {
          "date": "2021-02-04T18:38:11.097Z",
          "due": "4h2m",
          "operator": "Citilink",
          "busId": "GLI26393",
          "price": "16$",
          "seats": 19,
          "source": "MT",
          "dest": "VA"
      },
      {
          "date": "2021-01-30T18:42:48.388Z",
          "due": "3h30m",
          "operator": "Citilink",
          "busId": "GLI46456",
          "price": "18$",
          "seats": 16,
          "source": "FL",
          "dest": "KY"
      },
      {
          "date": "2021-01-02T02:47:25.080Z",
          "due": "5h58m",
          "operator": "Westcat",
          "busId": "GLI70241",
          "price": "22$",
          "seats": 18,
          "source": "IN",
          "dest": "MI"
      },
      {
          "date": "2021-03-11T22:48:47.183Z",
          "due": "5h58m",
          "operator": "Citilink",
          "busId": "GLI89898",
          "price": "30$",
          "seats": 17,
          "source": "DE",
          "dest": "OR"
      },
      {
          "date": "2021-03-04T08:04:27.607Z",
          "due": "3h38m",
          "operator": "Citilink",
          "busId": "GLI40586",
          "price": "37$",
          "seats": 35,
          "source": "GA",
          "dest": "PA"
      },
      {
          "date": "2021-01-03T20:28:26.947Z",
          "due": "3h52m",
          "operator": "Ride SMART",
          "busId": "GLI46514",
          "price": "19$",
          "seats": 15,
          "source": "VT",
          "dest": "OH"
      },
      {
          "date": "2021-02-15T21:39:16.220Z",
          "due": "5h8m",
          "operator": "Ride SMART",
          "busId": "GLI14958",
          "price": "35$",
          "seats": 28,
          "source": "WI",
          "dest": "AL"
      },
      {
          "date": "2021-03-02T08:19:12.365Z",
          "due": "3h51m",
          "operator": "Citilink",
          "busId": "GLI31541",
          "price": "11$",
          "seats": 34,
          "source": "OH",
          "dest": "MA"
      },
      {
          "date": "2021-03-13T10:54:02.736Z",
          "due": "4h37m",
          "operator": "Westcat",
          "busId": "GLI78351",
          "price": "11$",
          "seats": 37,
          "source": "NM",
          "dest": "VA"
      },
      {
          "date": "2021-03-11T16:47:10.028Z",
          "due": "4h46m",
          "operator": "Westcat",
          "busId": "GLI70549",
          "price": "20$",
          "seats": 31,
          "source": "KY",
          "dest": "MS"
      },
      {
          "date": "2021-02-06T14:46:40.412Z",
          "due": "3h13m",
          "operator": "Westcat",
          "busId": "GLI45970",
          "price": "39$",
          "seats": 37,
          "source": "LA",
          "dest": "WA"
      },
      {
          "date": "2021-01-30T08:02:28.088Z",
          "due": "5h45m",
          "operator": "Citilink",
          "busId": "GLI83449",
          "price": "33$",
          "seats": 30,
          "source": "KS",
          "dest": "WA"
      },
      {
          "date": "2021-01-18T08:16:34.705Z",
          "due": "4h13m",
          "operator": "Citilink",
          "busId": "GLI34166",
          "price": "19$",
          "seats": 21,
          "source": "SC",
          "dest": "AR"
      },
      {
          "date": "2021-01-20T17:53:48.492Z",
          "due": "4h55m",
          "operator": "Ride SMART",
          "busId": "GLI59115",
          "price": "23$",
          "seats": 40,
          "source": "PA",
          "dest": "IN"
      },
      {
          "date": "2021-02-07T08:40:23.360Z",
          "due": "5h30m",
          "operator": "Citilink",
          "busId": "GLI27981",
          "price": "12$",
          "seats": 35,
          "source": "KY",
          "dest": "MN"
      },
      {
          "date": "2021-02-24T21:08:13.079Z",
          "due": "5h9m",
          "operator": "Citilink",
          "busId": "GLI62568",
          "price": "20$",
          "seats": 31,
          "source": "TN",
          "dest": "MD"
      },
      {
          "date": "2021-01-06T07:58:48.846Z",
          "due": "4h14m",
          "operator": "Ride SMART",
          "busId": "GLI24514",
          "price": "10$",
          "seats": 34,
          "source": "OH",
          "dest": "CO"
      },
      {
          "date": "2021-01-30T10:13:10.145Z",
          "due": "4h52m",
          "operator": "Ride SMART",
          "busId": "GLI51788",
          "price": "12$",
          "seats": 30,
          "source": "AL",
          "dest": "IL"
      },
      {
          "date": "2021-03-14T13:13:49.462Z",
          "due": "3h40m",
          "operator": "Citilink",
          "busId": "GLI92120",
          "price": "30$",
          "seats": 18,
          "source": "NY",
          "dest": "TX"
      },
      {
          "date": "2021-01-19T00:04:21.302Z",
          "due": "5h22m",
          "operator": "Citilink",
          "busId": "GLI32104",
          "price": "35$",
          "seats": 18,
          "source": "SC",
          "dest": "MI"
      },
      {
          "date": "2021-01-16T20:31:57.764Z",
          "due": "4h46m",
          "operator": "Ride SMART",
          "busId": "GLI54173",
          "price": "10$",
          "seats": 38,
          "source": "MO",
          "dest": "OH"
      },
      {
          "date": "2021-01-01T14:42:17.230Z",
          "due": "4h22m",
          "operator": "Citilink",
          "busId": "GLI81747",
          "price": "36$",
          "seats": 26,
          "source": "CA",
          "dest": "WV"
      },
      {
          "date": "2021-01-22T21:58:34.332Z",
          "due": "4h11m",
          "operator": "Citilink",
          "busId": "GLI93534",
          "price": "12$",
          "seats": 22,
          "source": "IA",
          "dest": "OK"
      },
      {
          "date": "2021-01-24T07:57:49.487Z",
          "due": "3h18m",
          "operator": "Ride SMART",
          "busId": "GLI50515",
          "price": "39$",
          "seats": 39,
          "source": "AR",
          "dest": "WI"
      },
      {
          "date": "2021-01-20T16:47:44.630Z",
          "due": "5h26m",
          "operator": "Citilink",
          "busId": "GLI61634",
          "price": "10$",
          "seats": 37,
          "source": "FL",
          "dest": "WA"
      },
      {
          "date": "2021-01-07T13:52:02.488Z",
          "due": "3h39m",
          "operator": "Citilink",
          "busId": "GLI89821",
          "price": "37$",
          "seats": 24,
          "source": "IN",
          "dest": ""
      },
      {
          "date": "2021-01-17T03:30:25.874Z",
          "due": "5h9m",
          "operator": "Citilink",
          "busId": "GLI28575",
          "price": "33$",
          "seats": 32,
          "source": "NM",
          "dest": "VT"
      },
      {
          "date": "2021-02-23T02:10:35.853Z",
          "due": "5h41m",
          "operator": "Westcat",
          "busId": "GLI73290",
          "price": "22$",
          "seats": 15,
          "source": "DE",
          "dest": "WY"
      },
      {
          "date": "2021-02-02T16:13:24.757Z",
          "due": "4h31m",
          "operator": "Westcat",
          "busId": "GLI25094",
          "price": "17$",
          "seats": 36,
          "source": "ID",
          "dest": "RI"
      },
      {
          "date": "2021-01-29T02:02:15.284Z",
          "due": "3h33m",
          "operator": "Ride SMART",
          "busId": "GLI64346",
          "price": "33$",
          "seats": 36,
          "source": "WA",
          "dest": "ND"
      },
      {
          "date": "2021-02-17T18:27:20.548Z",
          "due": "3h49m",
          "operator": "Westcat",
          "busId": "GLI20741",
          "price": "17$",
          "seats": 25,
          "source": "SC",
          "dest": "NJ"
      },
      {
          "date": "2021-01-05T07:31:53.853Z",
          "due": "5h32m",
          "operator": "Westcat",
          "busId": "GLI92128",
          "price": "13$",
          "seats": 37,
          "source": "NM",
          "dest": "AK"
      },
      {
          "date": "2021-03-05T14:29:18.898Z",
          "due": "5h4m",
          "operator": "Westcat",
          "busId": "GLI72249",
          "price": "38$",
          "seats": 18,
          "source": "NM",
          "dest": "NJ"
      },
      {
          "date": "2021-01-21T16:20:28.683Z",
          "due": "5h12m",
          "operator": "Westcat",
          "busId": "GLI76594",
          "price": "27$",
          "seats": 31,
          "source": "CT",
          "dest": "CT"
      },
      {
          "date": "2021-01-17T07:53:17.616Z",
          "due": "5h50m",
          "operator": "Westcat",
          "busId": "GLI26389",
          "price": "11$",
          "seats": 16,
          "source": "LA",
          "dest": "NJ"
      },
      {
          "date": "2021-01-31T22:56:12.197Z",
          "due": "3h27m",
          "operator": "Westcat",
          "busId": "GLI89796",
          "price": "36$",
          "seats": 21,
          "source": "NE",
          "dest": "MI"
      },
      {
          "date": "2021-01-03T02:27:56.407Z",
          "due": "3h18m",
          "operator": "Citilink",
          "busId": "GLI71915",
          "price": "10$",
          "seats": 21,
          "source": "AR",
          "dest": "MO"
      },
      {
          "date": "2021-01-23T21:45:24.921Z",
          "due": "4h16m",
          "operator": "Westcat",
          "busId": "GLI16614",
          "price": "35$",
          "seats": 25,
          "source": "OR",
          "dest": "AK"
      },
      {
          "date": "2021-01-03T14:11:07.329Z",
          "due": "4h55m",
          "operator": "Ride SMART",
          "busId": "GLI21755",
          "price": "18$",
          "seats": 36,
          "source": "MN",
          "dest": "OH"
      },
      {
          "date": "2021-02-03T16:40:25.451Z",
          "due": "4h40m",
          "operator": "Westcat",
          "busId": "GLI98310",
          "price": "32$",
          "seats": 35,
          "source": "TX",
          "dest": "RI"
      },
      {
          "date": "2021-01-27T17:40:41.693Z",
          "due": "3h56m",
          "operator": "Ride SMART",
          "busId": "GLI44149",
          "price": "23$",
          "seats": 35,
          "source": "AL",
          "dest": "NV"
      },
      {
          "date": "2021-01-14T18:38:25.748Z",
          "due": "3h50m",
          "operator": "Citilink",
          "busId": "GLI36263",
          "price": "32$",
          "seats": 20,
          "source": "AL",
          "dest": "SD"
      },
      {
          "date": "2021-01-08T05:03:16.721Z",
          "due": "3h20m",
          "operator": "Westcat",
          "busId": "GLI70776",
          "price": "10$",
          "seats": 15,
          "source": "IN",
          "dest": "ID"
      },
      {
          "date": "2021-02-14T06:31:44.857Z",
          "due": "4h34m",
          "operator": "Westcat",
          "busId": "GLI33478",
          "price": "28$",
          "seats": 29,
          "source": "NH",
          "dest": "OH"
      },
      {
          "date": "2021-01-02T01:48:17.472Z",
          "due": "5h38m",
          "operator": "Westcat",
          "busId": "GLI14644",
          "price": "11$",
          "seats": 17,
          "source": "MO",
          "dest": "FL"
      },
      {
          "date": "2021-01-07T08:58:02.281Z",
          "due": "3h24m",
          "operator": "Westcat",
          "busId": "GLI51606",
          "price": "31$",
          "seats": 39,
          "source": "WY",
          "dest": "CT"
      },
      {
          "date": "2021-02-20T10:02:41.864Z",
          "due": "5h42m",
          "operator": "Citilink",
          "busId": "GLI88480",
          "price": "35$",
          "seats": 28,
          "source": "TN",
          "dest": "IL"
      },
      {
          "date": "2021-01-01T08:46:49.573Z",
          "due": "3h27m",
          "operator": "Ride SMART",
          "busId": "GLI36614",
          "price": "36$",
          "seats": 23,
          "source": "KS",
          "dest": "ID"
      },
      {
          "date": "2021-03-13T21:11:41.502Z",
          "due": "5h37m",
          "operator": "Westcat",
          "busId": "GLI32136",
          "price": "13$",
          "seats": 22,
          "source": "OK",
          "dest": "NH"
      },
      {
          "date": "2021-01-15T16:29:56.675Z",
          "due": "5h19m",
          "operator": "Citilink",
          "busId": "GLI55848",
          "price": "24$",
          "seats": 35,
          "source": "CO",
          "dest": "NE"
      },
      {
          "date": "2021-02-03T06:10:55.121Z",
          "due": "5h29m",
          "operator": "Citilink",
          "busId": "GLI77809",
          "price": "11$",
          "seats": 39,
          "source": "IN",
          "dest": "AZ"
      },
      {
          "date": "2021-03-06T05:27:34.500Z",
          "due": "4h29m",
          "operator": "Westcat",
          "busId": "GLI16642",
          "price": "16$",
          "seats": 15,
          "source": "WI",
          "dest": "TX"
      },
      {
          "date": "2021-03-07T20:50:03.650Z",
          "due": "5h4m",
          "operator": "Westcat",
          "busId": "GLI55587",
          "price": "18$",
          "seats": 26,
          "source": "FL",
          "dest": "ND"
      },
      {
          "date": "2021-01-05T06:40:40.328Z",
          "due": "4h46m",
          "operator": "Westcat",
          "busId": "GLI22993",
          "price": "17$",
          "seats": 30,
          "source": "GA",
          "dest": "MD"
      },
      {
          "date": "2021-02-22T14:02:19.716Z",
          "due": "4h37m",
          "operator": "Citilink",
          "busId": "GLI35490",
          "price": "37$",
          "seats": 37,
          "source": "DE",
          "dest": "NJ"
      },
      {
          "date": "2021-03-11T13:45:39.636Z",
          "due": "3h56m",
          "operator": "Citilink",
          "busId": "GLI40049",
          "price": "32$",
          "seats": 36,
          "source": "MI",
          "dest": "HI"
      },
      {
          "date": "2021-03-06T22:08:57.012Z",
          "due": "4h13m",
          "operator": "Ride SMART",
          "busId": "GLI39727",
          "price": "28$",
          "seats": 26,
          "source": "IN",
          "dest": "LA"
      },
      {
          "date": "2021-01-08T05:55:52.483Z",
          "due": "5h38m",
          "operator": "Citilink",
          "busId": "GLI94136",
          "price": "27$",
          "seats": 40,
          "source": "IL",
          "dest": "AR"
      },
      {
          "date": "2021-02-20T06:59:19.054Z",
          "due": "4h5m",
          "operator": "Westcat",
          "busId": "GLI17919",
          "price": "37$",
          "seats": 39,
          "source": "NM",
          "dest": "CO"
      },
      {
          "date": "2021-02-24T16:47:33.581Z",
          "due": "4h15m",
          "operator": "Ride SMART",
          "busId": "GLI26376",
          "price": "35$",
          "seats": 19,
          "source": "NM",
          "dest": "WY"
      },
      {
          "date": "2021-03-10T03:13:36.282Z",
          "due": "4h27m",
          "operator": "Ride SMART",
          "busId": "GLI40325",
          "price": "35$",
          "seats": 18,
          "source": "NV",
          "dest": "MI"
      },
      {
          "date": "2021-02-06T09:43:23.462Z",
          "due": "3h44m",
          "operator": "Citilink",
          "busId": "GLI50132",
          "price": "11$",
          "seats": 26,
          "source": "MI",
          "dest": "MN"
      },
      {
          "date": "2021-03-05T23:38:11.661Z",
          "due": "4h31m",
          "operator": "Westcat",
          "busId": "GLI41977",
          "price": "10$",
          "seats": 36,
          "source": "MI",
          "dest": "IA"
      },
      {
          "date": "2021-02-23T03:19:46.661Z",
          "due": "5h45m",
          "operator": "Citilink",
          "busId": "GLI51843",
          "price": "14$",
          "seats": 39,
          "source": "ND",
          "dest": "MS"
      },
      {
          "date": "2021-01-27T15:57:50.547Z",
          "due": "5h3m",
          "operator": "Ride SMART",
          "busId": "GLI75242",
          "price": "40$",
          "seats": 15,
          "source": "PA",
          "dest": "UT"
      },
      {
          "date": "2021-02-08T12:13:12.455Z",
          "due": "5h42m",
          "operator": "Citilink",
          "busId": "GLI83713",
          "price": "12$",
          "seats": 38,
          "source": "HI",
          "dest": "MD"
      },
      {
          "date": "2021-03-10T18:37:48.021Z",
          "due": "3h43m",
          "operator": "Ride SMART",
          "busId": "GLI53629",
          "price": "39$",
          "seats": 39,
          "source": "AR",
          "dest": "NM"
      },
      {
          "date": "2021-01-02T21:35:10.289Z",
          "due": "5h58m",
          "operator": "Citilink",
          "busId": "GLI59379",
          "price": "21$",
          "seats": 35,
          "source": "TN",
          "dest": "AZ"
      },
      {
          "date": "2021-03-02T11:14:54.373Z",
          "due": "5h6m",
          "operator": "Citilink",
          "busId": "GLI45723",
          "price": "10$",
          "seats": 27,
          "source": "ME",
          "dest": "AL"
      },
      {
          "date": "2021-02-14T00:10:48.452Z",
          "due": "4h16m",
          "operator": "Citilink",
          "busId": "GLI19974",
          "price": "19$",
          "seats": 28,
          "source": "RI",
          "dest": "KS"
      },
      {
          "date": "2021-02-26T13:01:53.144Z",
          "due": "4h59m",
          "operator": "Citilink",
          "busId": "GLI72566",
          "price": "24$",
          "seats": 40,
          "source": "KS",
          "dest": "DE"
      },
      {
          "date": "2021-01-08T21:16:29.434Z",
          "due": "3h48m",
          "operator": "Westcat",
          "busId": "GLI52594",
          "price": "12$",
          "seats": 38,
          "source": "DE",
          "dest": "VT"
      },
      {
          "date": "2021-01-21T17:45:35.007Z",
          "due": "3h46m",
          "operator": "Westcat",
          "busId": "GLI38084",
          "price": "35$",
          "seats": 35,
          "source": "WA",
          "dest": "MA"
      },
      {
          "date": "2021-02-07T08:48:16.720Z",
          "due": "5h15m",
          "operator": "Westcat",
          "busId": "GLI25666",
          "price": "17$",
          "seats": 33,
          "source": "NH",
          "dest": "WI"
      },
      {
          "date": "2021-01-03T18:29:36.816Z",
          "due": "4h45m",
          "operator": "Westcat",
          "busId": "GLI49397",
          "price": "28$",
          "seats": 29,
          "source": "VA",
          "dest": "VT"
      },
      {
          "date": "2021-01-10T19:39:38.803Z",
          "due": "3h59m",
          "operator": "Ride SMART",
          "busId": "GLI68527",
          "price": "22$",
          "seats": 20,
          "source": "ME",
          "dest": "PA"
      },
      {
          "date": "2021-02-01T09:12:53.493Z",
          "due": "5h22m",
          "operator": "Citilink",
          "busId": "GLI38280",
          "price": "10$",
          "seats": 37,
          "source": "ND",
          "dest": "WY"
      },
      {
          "date": "2021-01-28T11:28:29.854Z",
          "due": "3h55m",
          "operator": "Ride SMART",
          "busId": "GLI84567",
          "price": "15$",
          "seats": 15,
          "source": "KY",
          "dest": "CA"
      },
      {
          "date": "2021-02-06T13:37:21.138Z",
          "due": "5h8m",
          "operator": "Citilink",
          "busId": "GLI82598",
          "price": "20$",
          "seats": 34,
          "source": "DE",
          "dest": "NY"
      },
      {
          "date": "2021-02-05T12:12:16.374Z",
          "due": "5h11m",
          "operator": "Ride SMART",
          "busId": "GLI45232",
          "price": "12$",
          "seats": 26,
          "source": "CT",
          "dest": "OR"
      },
      {
          "date": "2021-03-06T23:14:13.328Z",
          "due": "3h30m",
          "operator": "Westcat",
          "busId": "GLI89528",
          "price": "36$",
          "seats": 27,
          "source": "TN",
          "dest": "AK"
      },
      {
          "date": "2021-01-04T07:16:09.383Z",
          "due": "5h36m",
          "operator": "Westcat",
          "busId": "GLI21797",
          "price": "22$",
          "seats": 19,
          "source": "MS",
          "dest": "KS"
      },
      {
          "date": "2021-01-24T06:40:41.483Z",
          "due": "3h48m",
          "operator": "Westcat",
          "busId": "GLI61337",
          "price": "37$",
          "seats": 19,
          "source": "AR",
          "dest": "CT"
      },
      {
          "date": "2021-03-12T00:59:38.378Z",
          "due": "3h32m",
          "operator": "Ride SMART",
          "busId": "GLI94208",
          "price": "30$",
          "seats": 19,
          "source": "OH",
          "dest": "OR"
      },
      {
          "date": "2021-01-11T02:21:33.803Z",
          "due": "4h20m",
          "operator": "Citilink",
          "busId": "GLI50741",
          "price": "17$",
          "seats": 38,
          "source": "CT",
          "dest": "CO"
      },
      {
          "date": "2021-01-28T19:13:08.091Z",
          "due": "3h26m",
          "operator": "Ride SMART",
          "busId": "GLI31765",
          "price": "17$",
          "seats": 21,
          "source": "WY",
          "dest": "MA"
      },
      {
          "date": "2021-01-11T14:54:10.386Z",
          "due": "5h5m",
          "operator": "Westcat",
          "busId": "GLI68019",
          "price": "15$",
          "seats": 24,
          "source": "OR",
          "dest": "IL"
      },
      {
          "date": "2021-01-24T23:17:15.763Z",
          "due": "5h32m",
          "operator": "Ride SMART",
          "busId": "GLI33084",
          "price": "23$",
          "seats": 23,
          "source": "SC",
          "dest": "IL"
      },
      {
          "date": "2021-03-03T15:08:09.706Z",
          "due": "4h57m",
          "operator": "Citilink",
          "busId": "GLI54480",
          "price": "30$",
          "seats": 33,
          "source": "SC",
          "dest": "CO"
      },
      {
          "date": "2021-03-10T15:23:25.293Z",
          "due": "4h31m",
          "operator": "Citilink",
          "busId": "GLI70539",
          "price": "34$",
          "seats": 21,
          "source": "NV",
          "dest": "WA"
      },
      {
          "date": "2021-01-21T09:11:47.647Z",
          "due": "5h45m",
          "operator": "Citilink",
          "busId": "GLI34243",
          "price": "22$",
          "seats": 20,
          "source": "VT",
          "dest": "IA"
      },
      {
          "date": "2021-02-16T03:13:33.351Z",
          "due": "5h55m",
          "operator": "Westcat",
          "busId": "GLI52463",
          "price": "22$",
          "seats": 22,
          "source": "OK",
          "dest": "ID"
      },
      {
          "date": "2021-01-23T08:38:51.528Z",
          "due": "3h59m",
          "operator": "Citilink",
          "busId": "GLI83156",
          "price": "30$",
          "seats": 33,
          "source": "WY",
          "dest": "ID"
      },
      {
          "date": "2021-02-10T20:37:54.630Z",
          "due": "5h45m",
          "operator": "Citilink",
          "busId": "GLI17683",
          "price": "32$",
          "seats": 18,
          "source": "AR",
          "dest": "DE"
      },
      {
          "date": "2021-02-19T00:50:00.807Z",
          "due": "5h24m",
          "operator": "Citilink",
          "busId": "GLI89099",
          "price": "15$",
          "seats": 24,
          "source": "IN",
          "dest": "VA"
      },
      {
          "date": "2021-02-21T19:29:57.986Z",
          "due": "3h4m",
          "operator": "Westcat",
          "busId": "GLI52690",
          "price": "18$",
          "seats": 23,
          "source": "OH",
          "dest": "FL"
      },
      {
          "date": "2021-02-18T11:20:53.302Z",
          "due": "5h56m",
          "operator": "Citilink",
          "busId": "GLI64170",
          "price": "15$",
          "seats": 36,
          "source": "ND",
          "dest": "KY"
      },
      {
          "date": "2021-01-31T18:43:24.558Z",
          "due": "3h20m",
          "operator": "Ride SMART",
          "busId": "GLI66982",
          "price": "40$",
          "seats": 40,
          "source": "TX",
          "dest": "IL"
      },
      {
          "date": "2021-03-03T21:59:56.823Z",
          "due": "5h28m",
          "operator": "Citilink",
          "busId": "GLI76709",
          "price": "33$",
          "seats": 18,
          "source": "MA",
          "dest": "OK"
      },
      {
          "date": "2021-02-02T18:23:10.414Z",
          "due": "5h29m",
          "operator": "Ride SMART",
          "busId": "GLI64786",
          "price": "32$",
          "seats": 24,
          "source": "AK",
          "dest": "PA"
      },
      {
          "date": "2021-01-24T09:10:53.111Z",
          "due": "5h36m",
          "operator": "Ride SMART",
          "busId": "GLI90049",
          "price": "23$",
          "seats": 18,
          "source": "SD",
          "dest": "NH"
      },
      {
          "date": "2021-01-26T01:47:51.422Z",
          "due": "3h52m",
          "operator": "Citilink",
          "busId": "GLI53909",
          "price": "33$",
          "seats": 31,
          "source": "TX",
          "dest": "MI"
      },
      {
          "date": "2021-03-08T08:34:45.117Z",
          "due": "3h33m",
          "operator": "Citilink",
          "busId": "GLI69269",
          "price": "32$",
          "seats": 16,
          "source": "CT",
          "dest": "SC"
      },
      {
          "date": "2021-02-09T23:35:29.919Z",
          "due": "4h51m",
          "operator": "Citilink",
          "busId": "GLI14516",
          "price": "16$",
          "seats": 30,
          "source": "NH",
          "dest": "NJ"
      },
      {
          "date": "2021-03-01T23:52:08.907Z",
          "due": "4h34m",
          "operator": "Westcat",
          "busId": "GLI79318",
          "price": "32$",
          "seats": 25,
          "source": "TX",
          "dest": "PA"
      },
      {
          "date": "2021-01-27T20:11:53.841Z",
          "due": "5h6m",
          "operator": "Ride SMART",
          "busId": "GLI54554",
          "price": "18$",
          "seats": 30,
          "source": "VA",
          "dest": "NY"
      },
      {
          "date": "2021-01-11T21:30:31.236Z",
          "due": "4h41m",
          "operator": "Ride SMART",
          "busId": "GLI72878",
          "price": "12$",
          "seats": 24,
          "source": "IA",
          "dest": "WY"
      },
      {
          "date": "2021-02-07T09:25:03.624Z",
          "due": "4h13m",
          "operator": "Westcat",
          "busId": "GLI80020",
          "price": "27$",
          "seats": 32,
          "source": "MO",
          "dest": "HI"
      },
      {
          "date": "2021-02-18T04:21:27.768Z",
          "due": "5h7m",
          "operator": "Citilink",
          "busId": "GLI72530",
          "price": "15$",
          "seats": 31,
          "source": "TX",
          "dest": "RI"
      },
      {
          "date": "2021-02-22T01:46:09.916Z",
          "due": "3h52m",
          "operator": "Westcat",
          "busId": "GLI17624",
          "price": "26$",
          "seats": 34,
          "source": "AK",
          "dest": "MA"
      },
      {
          "date": "2021-03-01T19:38:31.609Z",
          "due": "3h51m",
          "operator": "Ride SMART",
          "busId": "GLI62889",
          "price": "17$",
          "seats": 15,
          "source": "WI",
          "dest": "CT"
      },
      {
          "date": "2021-01-04T23:25:17.358Z",
          "due": "3h43m",
          "operator": "Westcat",
          "busId": "GLI90247",
          "price": "23$",
          "seats": 30,
          "source": "DE",
          "dest": "OK"
      },
      {
          "date": "2021-01-02T23:09:43.222Z",
          "due": "4h4m",
          "operator": "Westcat",
          "busId": "GLI42552",
          "price": "31$",
          "seats": 32,
          "source": "MN",
          "dest": "WY"
      },
      {
          "date": "2021-01-29T17:55:48.382Z",
          "due": "5h17m",
          "operator": "Citilink",
          "busId": "GLI35557",
          "price": "18$",
          "seats": 29,
          "source": "OH",
          "dest": "OH"
      },
      {
          "date": "2021-02-11T09:13:53.392Z",
          "due": "3h59m",
          "operator": "Ride SMART",
          "busId": "GLI96587",
          "price": "37$",
          "seats": 36,
          "source": "NC",
          "dest": "NY"
      },
      {
          "date": "2021-02-11T12:48:28.596Z",
          "due": "5h42m",
          "operator": "Westcat",
          "busId": "GLI24130",
          "price": "30$",
          "seats": 24,
          "source": "TX",
          "dest": "NH"
      },
      {
          "date": "2021-02-23T15:26:25.281Z",
          "due": "4h57m",
          "operator": "Westcat",
          "busId": "GLI64231",
          "price": "15$",
          "seats": 39,
          "source": "WY",
          "dest": "IL"
      },
      {
          "date": "2021-02-22T11:09:53.582Z",
          "due": "4h3m",
          "operator": "Ride SMART",
          "busId": "GLI90904",
          "price": "29$",
          "seats": 31,
          "source": "MO",
          "dest": "IA"
      },
      {
          "date": "2021-02-16T12:36:20.570Z",
          "due": "4h25m",
          "operator": "Westcat",
          "busId": "GLI74681",
          "price": "19$",
          "seats": 26,
          "source": "OK",
          "dest": "SC"
      },
      {
          "date": "2021-02-16T06:02:30.770Z",
          "due": "3h34m",
          "operator": "Ride SMART",
          "busId": "GLI95772",
          "price": "32$",
          "seats": 17,
          "source": "TN",
          "dest": "SD"
      },
      {
          "date": "2021-01-12T00:31:52.301Z",
          "due": "5h33m",
          "operator": "Citilink",
          "busId": "GLI47059",
          "price": "39$",
          "seats": 22,
          "source": "GA",
          "dest": "MA"
      },
      {
          "date": "2021-01-14T18:45:35.580Z",
          "due": "3h16m",
          "operator": "Citilink",
          "busId": "GLI92045",
          "price": "21$",
          "seats": 30,
          "source": "CO",
          "dest": "LA"
      },
      {
          "date": "2021-01-15T15:03:47.087Z",
          "due": "5h44m",
          "operator": "Westcat",
          "busId": "GLI59961",
          "price": "21$",
          "seats": 31,
          "source": "IL",
          "dest": "SC"
      },
      {
          "date": "2021-01-22T05:04:33.280Z",
          "due": "5h19m",
          "operator": "Westcat",
          "busId": "GLI72896",
          "price": "18$",
          "seats": 40,
          "source": "MS",
          "dest": "GA"
      },
      {
          "date": "2021-03-08T00:47:48.911Z",
          "due": "5h12m",
          "operator": "Ride SMART",
          "busId": "GLI36033",
          "price": "25$",
          "seats": 28,
          "source": "ND",
          "dest": "NC"
      },
      {
          "date": "2021-02-27T08:40:25.245Z",
          "due": "5h27m",
          "operator": "Westcat",
          "busId": "GLI80583",
          "price": "31$",
          "seats": 40,
          "source": "TN",
          "dest": "MA"
      },
      {
          "date": "2021-03-11T07:00:24.762Z",
          "due": "3h34m",
          "operator": "Ride SMART",
          "busId": "GLI29876",
          "price": "10$",
          "seats": 32,
          "source": "CA",
          "dest": "ND"
      },
      {
          "date": "2021-01-16T19:13:23.428Z",
          "due": "3h9m",
          "operator": "Westcat",
          "busId": "GLI42427",
          "price": "15$",
          "seats": 23,
          "source": "OK",
          "dest": "AL"
      },
      {
          "date": "2021-02-16T11:23:41.548Z",
          "due": "4h34m",
          "operator": "Citilink",
          "busId": "GLI75546",
          "price": "30$",
          "seats": 25,
          "source": "MN",
          "dest": "GA"
      },
      {
          "date": "2021-01-21T18:33:31.198Z",
          "due": "4h26m",
          "operator": "Citilink",
          "busId": "GLI35034",
          "price": "19$",
          "seats": 22,
          "source": "IN",
          "dest": "MO"
      },
      {
          "date": "2021-03-09T14:18:09.584Z",
          "due": "4h58m",
          "operator": "Westcat",
          "busId": "GLI95896",
          "price": "14$",
          "seats": 16,
          "source": "IL"
      },
      {
          "date": "2021-03-01T13:14:14.356Z",
          "due": "5h18m",
          "operator": "Westcat",
          "busId": "GLI37881",
          "price": "27$",
          "seats": 37,
          "source": "KY",
          "dest": "MT"
      },
      {
          "date": "2021-01-19T02:47:33.333Z",
          "due": "3h35m",
          "operator": "Ride SMART",
          "busId": "GLI95466",
          "price": "32$",
          "seats": 32,
          "source": "AK",
          "dest": "VA"
      },
      {
          "date": "2021-01-08T16:40:40.264Z",
          "due": "4h18m",
          "operator": "Westcat",
          "busId": "GLI59320",
          "price": "21$",
          "seats": 28,
          "source": "WA",
          "dest": "PA"
      },
      {
          "date": "2021-01-31T01:56:31.734Z",
          "due": "4h56m",
          "operator": "Ride SMART",
          "busId": "GLI41854",
          "price": "13$",
          "seats": 15,
          "source": "LA",
          "dest": "VA"
      },
      {
          "date": "2021-01-22T00:07:33.913Z",
          "due": "3h58m",
          "operator": "Citilink",
          "busId": "GLI70433",
          "price": "26$",
          "seats": 24,
          "source": "NE"
      },
      {
          "date": "2021-02-26T06:03:51.613Z",
          "due": "5h40m",
          "operator": "Westcat",
          "busId": "GLI72902",
          "price": "37$",
          "seats": 39,
          "source": "WY",
          "dest": "MO"
      },
      {
          "date": "2021-02-22T18:09:34.474Z",
          "due": "3h54m",
          "operator": "Westcat",
          "busId": "GLI39522",
          "price": "12$",
          "seats": 39,
          "source": "WV",
          "dest": "NH"
      },
      {
          "date": "2021-02-16T22:15:45.989Z",
          "due": "4h43m",
          "operator": "Ride SMART",
          "busId": "GLI23978",
          "price": "31$",
          "seats": 15,
          "source": "LA",
          "dest": "NM"
      },
      {
          "date": "2021-01-01T11:28:26.397Z",
          "due": "4h32m",
          "operator": "Ride SMART",
          "busId": "GLI17007",
          "price": "23$",
          "seats": 33,
          "source": "MS",
          "dest": "MN"
      },
      {
          "date": "2021-01-13T08:11:27.763Z",
          "due": "4h27m",
          "operator": "Ride SMART",
          "busId": "GLI62026",
          "price": "20$",
          "seats": 30,
          "source": "SD",
          "dest": "OH"
      },
      {
          "date": "2021-03-13T18:08:04.295Z",
          "due": "4h49m",
          "operator": "Citilink",
          "busId": "GLI71061",
          "price": "34$",
          "seats": 40,
          "source": "IN",
          "dest": "TN"
      },
      {
          "date": "2021-03-14T02:41:24.056Z",
          "due": "4h53m",
          "operator": "Westcat",
          "busId": "GLI47900",
          "price": "38$",
          "seats": 26,
          "source": "TX",
          "dest": "WA"
      },
      {
          "date": "2021-02-17T21:44:55.154Z",
          "due": "3h19m",
          "operator": "Citilink",
          "busId": "GLI29656",
          "price": "22$",
          "seats": 38,
          "source": "SC",
          "dest": "MT"
      },
      {
          "date": "2021-01-28T20:49:04.061Z",
          "due": "5h40m",
          "operator": "Ride SMART",
          "busId": "GLI92019",
          "price": "28$",
          "seats": 38,
          "source": "FL",
          "dest": "GA"
      },
      {
          "date": "2021-03-14T04:21:08.646Z",
          "due": "5h25m",
          "operator": "Ride SMART",
          "busId": "GLI94281",
          "price": "27$",
          "seats": 40,
          "source": "UT",
          "dest": "RI"
      },
      {
          "date": "2021-01-19T11:00:14.451Z",
          "due": "4h42m",
          "operator": "Ride SMART",
          "busId": "GLI18710",
          "price": "29$",
          "seats": 21,
          "source": "NH",
          "dest": "NE"
      },
      {
          "date": "2021-02-25T14:04:04.651Z",
          "due": "5h16m",
          "operator": "Ride SMART",
          "busId": "GLI52655",
          "price": "26$",
          "seats": 26,
          "source": "CA",
          "dest": "MO"
      },
      {
          "date": "2021-01-06T04:46:20.587Z",
          "due": "5h15m",
          "operator": "Ride SMART",
          "busId": "GLI94500",
          "price": "15$",
          "seats": 36,
          "source": "OH",
          "dest": "IL"
      },
      {
          "date": "2021-02-23T10:12:13.612Z",
          "due": "3h30m",
          "operator": "Westcat",
          "busId": "GLI75469",
          "price": "11$",
          "seats": 25,
          "source": "ND",
          "dest": "FL"
      },
      {
          "date": "2021-02-21T07:45:03.526Z",
          "due": "3h42m",
          "operator": "Citilink",
          "busId": "GLI87266",
          "price": "12$",
          "seats": 34,
          "source": "NJ",
          "dest": "CT"
      },
      {
          "date": "2021-02-24T20:25:58.800Z",
          "due": "3h24m",
          "operator": "Ride SMART",
          "busId": "GLI95607",
          "price": "38$",
          "seats": 33,
          "source": "MD",
          "dest": "OK"
      },
      {
          "date": "2021-02-14T13:40:03.566Z",
          "due": "5h33m",
          "operator": "Citilink",
          "busId": "GLI35872",
          "price": "12$",
          "seats": 27,
          "source": "NC",
          "dest": "AL"
      },
      {
          "date": "2021-02-02T11:35:52.286Z",
          "due": "3h2m",
          "operator": "Ride SMART",
          "busId": "GLI69340",
          "price": "14$",
          "seats": 35,
          "source": "CT",
          "dest": "AL"
      },
      {
          "date": "2021-01-17T16:28:40.114Z",
          "due": "4h49m",
          "operator": "Ride SMART",
          "busId": "GLI13229",
          "price": "35$",
          "seats": 30,
          "source": "OK",
          "dest": "MA"
      },
      {
          "date": "2021-01-12T01:09:13.436Z",
          "due": "5h15m",
          "operator": "Westcat",
          "busId": "GLI39621",
          "price": "32$",
          "seats": 27,
          "source": "HI",
          "dest": "SD"
      },
      {
          "date": "2021-03-08T19:13:01.773Z",
          "due": "5h2m",
          "operator": "Citilink",
          "busId": "GLI77118",
          "price": "26$",
          "seats": 40,
          "source": "CT",
          "dest": "TN"
      },
      {
          "date": "2021-02-07T18:43:00.714Z",
          "due": "3h25m",
          "operator": "Citilink",
          "busId": "GLI55503",
          "price": "30$",
          "seats": 40,
          "source": "MS",
          "dest": "NE"
      },
      {
          "date": "2021-01-29T03:05:30.983Z",
          "due": "3h39m",
          "operator": "Ride SMART",
          "busId": "GLI78760",
          "price": "39$",
          "seats": 24,
          "source": "IN",
          "dest": "PA"
      },
      {
          "date": "2021-03-14T18:31:37.795Z",
          "due": "3h30m",
          "operator": "Citilink",
          "busId": "GLI23340",
          "price": "24$",
          "seats": 16,
          "source": "MT",
          "dest": "TN"
      },
      {
          "date": "2021-01-27T19:39:33.045Z",
          "due": "3h43m",
          "operator": "Citilink",
          "busId": "GLI57309",
          "price": "16$",
          "seats": 36,
          "source": "SC",
          "dest": "GA"
      },
      {
          "date": "2021-03-02T14:25:37.310Z",
          "due": "5h52m",
          "operator": "Westcat",
          "busId": "GLI99129",
          "price": "12$",
          "seats": 36,
          "source": "KY",
          "dest": "OK"
      },
      {
          "date": "2021-01-19T23:18:08.178Z",
          "due": "4h3m",
          "operator": "Ride SMART",
          "busId": "GLI46665",
          "price": "32$",
          "seats": 29,
          "source": "VT",
          "dest": "OH"
      },
      {
          "date": "2021-01-13T15:22:27.956Z",
          "due": "5h29m",
          "operator": "Citilink",
          "busId": "GLI32370",
          "price": "33$",
          "seats": 24,
          "source": "KY",
          "dest": "AL"
      },
      {
          "date": "2021-02-12T17:30:02.739Z",
          "due": "4h20m",
          "operator": "Ride SMART",
          "busId": "GLI95628",
          "price": "11$",
          "seats": 25,
          "source": "GA",
          "dest": "SD"
      },
      {
          "date": "2021-02-09T15:09:26.938Z",
          "due": "3h33m",
          "operator": "Citilink",
          "busId": "GLI44779",
          "price": "28$",
          "seats": 18,
          "source": "OH",
          "dest": "NY"
      },
      {
          "date": "2021-01-14T17:06:06.138Z",
          "due": "5h17m",
          "operator": "Citilink",
          "busId": "GLI36171",
          "price": "40$",
          "seats": 36,
          "source": "RI",
          "dest": "ND"
      },
      {
          "date": "2021-02-06T05:20:55.251Z",
          "due": "3h57m",
          "operator": "Citilink",
          "busId": "GLI14091",
          "price": "28$",
          "seats": 37,
          "source": "KS",
          "dest": "SC"
      },
      {
          "date": "2021-01-16T00:49:39.778Z",
          "due": "5h12m",
          "operator": "Westcat",
          "busId": "GLI30080",
          "price": "20$",
          "seats": 22,
          "source": "ME",
          "dest": "WV"
      },
      {
          "date": "2021-01-12T23:20:48.368Z",
          "due": "4h56m",
          "operator": "Citilink",
          "busId": "GLI86963",
          "price": "36$",
          "seats": 31,
          "source": "IA",
          "dest": "VT"
      },
      {
          "date": "2021-01-13T01:47:28.430Z",
          "due": "4h58m",
          "operator": "Westcat",
          "busId": "GLI41635",
          "price": "33$",
          "seats": 30,
          "source": "GA",
          "dest": "TN"
      },
      {
          "date": "2021-02-17T08:03:03.883Z",
          "due": "3h9m",
          "operator": "Ride SMART",
          "busId": "GLI75861",
          "price": "37$",
          "seats": 25,
          "source": "NC",
          "dest": "ND"
      },
      {
          "date": "2021-02-28T02:31:07.880Z",
          "due": "4h40m",
          "operator": "Westcat",
          "busId": "GLI74594",
          "price": "30$",
          "seats": 24,
          "source": "MN",
          "dest": "DE"
      },
      {
          "date": "2021-02-23T15:16:03.437Z",
          "due": "4h51m",
          "operator": "Citilink",
          "busId": "GLI75680",
          "price": "21$",
          "seats": 26,
          "source": "DE",
          "dest": "CT"
      },
      {
          "date": "2021-02-17T14:15:06.568Z",
          "due": "3h2m",
          "operator": "Ride SMART",
          "busId": "GLI25483",
          "price": "34$",
          "seats": 35,
          "source": "MS",
          "dest": "ID"
      },
      {
          "date": "2021-02-20T15:50:05.040Z",
          "due": "5h30m",
          "operator": "Citilink",
          "busId": "GLI40983",
          "price": "21$",
          "seats": 15,
          "source": "AR",
          "dest": "ND"
      },
      {
          "date": "2021-01-22T16:30:03.317Z",
          "due": "5h13m",
          "operator": "Westcat",
          "busId": "GLI92890",
          "price": "30$",
          "seats": 34,
          "source": "WA",
          "dest": "OH"
      },
      {
          "date": "2021-01-06T04:39:58.496Z",
          "due": "5h23m",
          "operator": "Citilink",
          "busId": "GLI69685",
          "price": "10$",
          "seats": 17,
          "source": "LA",
          "dest": "NH"
      },
      {
          "date": "2021-02-15T02:08:11.339Z",
          "due": "4h52m",
          "operator": "Ride SMART",
          "busId": "GLI65454",
          "price": "13$",
          "seats": 38,
          "source": "TX",
          "dest": "RI"
      },
      {
          "date": "2021-02-06T04:05:53.521Z",
          "due": "4h26m",
          "operator": "Westcat",
          "busId": "GLI86330",
          "price": "13$",
          "seats": 17,
          "source": "CT",
          "dest": "IA"
      },
      {
          "date": "2021-03-10T17:01:37.323Z",
          "due": "5h31m",
          "operator": "Citilink",
          "busId": "GLI21234",
          "price": "27$",
          "seats": 21,
          "source": "IL",
          "dest": "TX"
      },
      {
          "date": "2021-01-21T07:24:39.506Z",
          "due": "4h32m",
          "operator": "Westcat",
          "busId": "GLI57423",
          "price": "13$",
          "seats": 30,
          "source": "OK",
          "dest": "FL"
      },
      {
          "date": "2021-03-13T07:35:03.830Z",
          "due": "4h7m",
          "operator": "Ride SMART",
          "busId": "GLI25764",
          "price": "21$",
          "seats": 17,
          "source": "NJ",
          "dest": "MA"
      },
      {
          "date": "2021-01-03T20:55:44.125Z",
          "due": "3h38m",
          "operator": "Westcat",
          "busId": "GLI64023",
          "price": "34$",
          "seats": 17,
          "source": "VA",
          "dest": "NJ"
      },
      {
          "date": "2021-03-02T16:24:16.390Z",
          "due": "3h31m",
          "operator": "Citilink",
          "busId": "GLI12634",
          "price": "17$",
          "seats": 39,
          "source": "MS",
          "dest": "MT"
      },
      {
          "date": "2021-02-04T08:50:34.090Z",
          "due": "5h6m",
          "operator": "Westcat",
          "busId": "GLI64425",
          "price": "27$",
          "seats": 28,
          "source": "IL",
          "dest": "NJ"
      },
      {
          "date": "2021-03-01T00:13:46.686Z",
          "due": "3h49m",
          "operator": "Westcat",
          "busId": "GLI17009",
          "price": "14$",
          "seats": 19,
          "source": "AL",
          "dest": "CO"
      },
      {
          "date": "2021-03-14T00:58:41.260Z",
          "due": "5h10m",
          "operator": "Ride SMART",
          "busId": "GLI90657",
          "price": "15$",
          "seats": 27,
          "source": "LA",
          "dest": "NV"
      },
      {
          "date": "2021-02-06T04:03:58.939Z",
          "due": "5h4m",
          "operator": "Citilink",
          "busId": "GLI53780",
          "price": "16$",
          "seats": 30,
          "source": "FL",
          "dest": "WI"
      },
      {
          "date": "2021-01-20T01:12:20.013Z",
          "due": "4h54m",
          "operator": "Westcat",
          "busId": "GLI83436",
          "price": "31$",
          "seats": 23,
          "source": "IA",
          "dest": "TX"
      },
      {
          "date": "2021-01-06T14:13:42.591Z",
          "due": "4h47m",
          "operator": "Westcat",
          "busId": "GLI51824",
          "price": "13$",
          "seats": 32,
          "source": "IA",
          "dest": "WA"
      },
      {
          "date": "2021-01-21T09:36:30.164Z",
          "due": "4h44m",
          "operator": "Ride SMART",
          "busId": "GLI20034",
          "price": "22$",
          "seats": 38,
          "source": "RI",
          "dest": "MT"
      },
      {
          "date": "2021-01-30T01:23:59.005Z",
          "due": "3h38m",
          "operator": "Citilink",
          "busId": "GLI96768",
          "price": "30$",
          "seats": 15,
          "source": "WY",
          "dest": "MS"
      },
      {
          "date": "2021-02-24T12:15:11.482Z",
          "due": "3h34m",
          "operator": "Westcat",
          "busId": "GLI25051",
          "price": "10$",
          "seats": 31,
          "source": "OH",
          "dest": "SD"
      },
      {
          "date": "2021-02-22T06:26:47.436Z",
          "due": "4h37m",
          "operator": "Citilink",
          "busId": "GLI17527",
          "price": "39$",
          "seats": 21,
          "source": "RI",
          "dest": "RI"
      },
      {
          "date": "2021-02-28T03:38:22.462Z",
          "due": "3h30m",
          "operator": "Ride SMART",
          "busId": "GLI15076",
          "price": "26$",
          "seats": 18,
          "source": "DE",
          "dest": "GA"
      },
      {
          "date": "2021-03-07T10:52:33.542Z",
          "due": "4h14m",
          "operator": "Westcat",
          "busId": "GLI85057",
          "price": "32$",
          "seats": 26,
          "source": "OR",
          "dest": "SD"
      },
      {
          "date": "2021-01-10T06:33:24.702Z",
          "due": "5h11m",
          "operator": "Citilink",
          "busId": "GLI42025",
          "price": "37$",
          "seats": 18,
          "source": "NE",
          "dest": "MA"
      },
      {
          "date": "2021-02-13T09:53:42.115Z",
          "due": "3h30m",
          "operator": "Ride SMART",
          "busId": "GLI32729",
          "price": "33$",
          "seats": 35,
          "source": "FL",
          "dest": "IL"
      },
      {
          "date": "2021-03-04T03:57:08.873Z",
          "due": "5h20m",
          "operator": "Citilink",
          "busId": "GLI53352",
          "price": "13$",
          "seats": 35,
          "source": "CA",
          "dest": "IN"
      },
      {
          "date": "2021-02-02T12:35:25.460Z",
          "due": "3h14m",
          "operator": "Citilink",
          "busId": "GLI79345",
          "price": "37$",
          "seats": 17,
          "source": "MN",
          "dest": "OR"
      },
      {
          "date": "2021-03-02T15:07:11.927Z",
          "due": "3h47m",
          "operator": "Ride SMART",
          "busId": "GLI30034",
          "price": "28$",
          "seats": 20,
          "source": "WA",
          "dest": "MN"
      },
      {
          "date": "2021-02-26T15:45:43.230Z",
          "due": "4h25m",
          "operator": "Ride SMART",
          "busId": "GLI97828",
          "price": "29$",
          "seats": 35,
          "source": "RI",
          "dest": "CA"
      },
      {
          "date": "2021-01-24T17:49:35.243Z",
          "due": "3h12m",
          "operator": "Westcat",
          "busId": "GLI51899",
          "price": "26$",
          "seats": 17,
          "source": "SC",
          "dest": "WY"
      },
      {
          "date": "2021-03-09T01:50:28.878Z",
          "due": "5h49m",
          "source": "",
          "operator": "Westcat",
          "busId": "GLI16276",
          "price": "18$",
          "seats": 36,
          "dest": "VA"
      },
      {
          "date": "2021-03-04T15:41:34.192Z",
          "due": "5h55m",
          "operator": "Citilink",
          "busId": "GLI25849",
          "price": "22$",
          "seats": 27,
          "source": "RI",
          "dest": "NH"
      },
      {
          "date": "2021-02-10T19:27:20.475Z",
          "due": "5h49m",
          "operator": "Ride SMART",
          "busId": "GLI99753",
          "price": "34$",
          "seats": 22,
          "source": "MD",
          "dest": "SC"
      },
      {
          "date": "2021-01-02T06:10:37.629Z",
          "due": "3h39m",
          "operator": "Ride SMART",
          "busId": "GLI65841",
          "price": "27$",
          "seats": 30,
          "source": "TN",
          "dest": "KS"
      },
      {
          "date": "2021-02-09T09:05:22.400Z",
          "due": "3h39m",
          "operator": "Westcat",
          "busId": "GLI60463",
          "price": "25$",
          "seats": 24,
          "source": "CA",
          "dest": "ID"
      },
      {
          "date": "2021-01-19T17:22:35.025Z",
          "due": "5h18m",
          "operator": "Citilink",
          "busId": "GLI84639",
          "price": "12$",
          "seats": 36,
          "source": "VA",
          "dest": "UT"
      },
      {
          "date": "2021-01-18T00:13:54.227Z",
          "due": "4h29m",
          "operator": "Ride SMART",
          "busId": "GLI87850",
          "price": "11$",
          "seats": 31,
          "source": "MS",
          "dest": "IL"
      },
      {
          "date": "2021-01-08T15:25:30.022Z",
          "due": "3h2m",
          "operator": "Citilink",
          "busId": "GLI18599",
          "price": "13$",
          "seats": 16,
          "source": "VA",
          "dest": "TN"
      },
      {
          "date": "2021-02-03T02:37:50.525Z",
          "due": "5h44m",
          "operator": "Citilink",
          "source": "",
          "busId": "GLI61190",
          "price": "13$",
          "seats": 30,
          "dest": "AZ"
      },
      {
          "date": "2021-03-14T03:47:56.981Z",
          "due": "3h40m",
          "operator": "Ride SMART",
          "busId": "GLI58014",
          "price": "26$",
          "seats": 38,
          "source": "MA",
          "dest": "ID"
      },
      {
          "date": "2021-02-19T16:11:31.090Z",
          "due": "4h39m",
          "operator": "Westcat",
          "busId": "GLI73491",
          "price": "35$",
          "seats": 19,
          "source": "LA",
          "dest": "AZ"
      },
      {
          "date": "2021-02-26T06:45:02.172Z",
          "due": "4h42m",
          "operator": "Westcat",
          "busId": "GLI47263",
          "price": "36$",
          "seats": 33,
          "source": "CA",
          "dest": "NV"
      },
      {
          "date": "2021-02-27T19:45:43.584Z",
          "due": "4h40m",
          "operator": "Ride SMART",
          "busId": "GLI54036",
          "price": "18$",
          "seats": 31,
          "source": "AR",
          "dest": "OK"
      },
      {
          "date": "2021-03-07T03:28:57.338Z",
          "due": "5h47m",
          "operator": "Westcat",
          "busId": "GLI20331",
          "price": "22$",
          "seats": 31,
          "source": "UT",
          "dest": "IN"
      },
      {
          "date": "2021-01-09T02:51:21.147Z",
          "due": "3h23m",
          "operator": "Citilink",
          "busId": "GLI18866",
          "price": "37$",
          "seats": 38,
          "source": "WY",
          "dest": "AL"
      },
      {
          "date": "2021-01-01T20:50:52.297Z",
          "due": "3h27m",
          "operator": "Westcat",
          "busId": "GLI50243",
          "price": "37$",
          "seats": 36,
          "source": "IA",
          "dest": "GA"
      },
      {
          "date": "2021-02-18T10:54:04.001Z",
          "due": "4h41m",
          "operator": "Citilink",
          "busId": "GLI48624",
          "price": "39$",
          "seats": 37,
          "source": "UT",
          "dest": "VA"
      },
      {
          "date": "2021-03-12T18:46:11.869Z",
          "due": "5h24m",
          "operator": "Citilink",
          "busId": "GLI62780",
          "price": "29$",
          "seats": 28,
          "source": "PA",
          "dest": "OH"
      },
      {
          "date": "2021-03-01T01:26:58.000Z",
          "due": "5h42m",
          "operator": "Citilink",
          "busId": "GLI70330",
          "price": "19$",
          "seats": 19,
          "source": "GA",
          "dest": "MS"
      },
      {
          "date": "2021-01-30T09:51:07.903Z",
          "due": "4h26m",
          "operator": "Westcat",
          "busId": "GLI54901",
          "price": "13$",
          "seats": 26,
          "source": "CA",
          "dest": "FL"
      },
      {
          "date": "2021-03-10T10:21:54.097Z",
          "due": "5h23m",
          "operator": "Ride SMART",
          "busId": "GLI31702",
          "price": "40$",
          "seats": 30,
          "source": "AZ",
          "dest": "SD"
      },
      {
          "date": "2021-01-11T06:20:18.312Z",
          "due": "5h51m",
          "operator": "Citilink",
          "busId": "GLI40172",
          "price": "22$",
          "seats": 23,
          "source": "ME",
          "dest": "MI"
      },
      {
          "date": "2021-01-31T16:38:23.656Z",
          "due": "4h38m",
          "operator": "Citilink",
          "busId": "GLI43262",
          "price": "19$",
          "seats": 40,
          "source": "TN",
          "dest": "OH"
      },
      {
          "date": "2021-02-07T13:48:29.379Z",
          "due": "5h52m",
          "operator": "Westcat",
          "busId": "GLI89569",
          "price": "15$",
          "seats": 16,
          "source": "CA",
          "dest": "DE"
      },
      {
          "date": "2021-02-15T20:32:25.459Z",
          "due": "5h32m",
          "operator": "Westcat",
          "busId": "GLI18039",
          "price": "32$",
          "seats": 39,
          "source": "NJ",
          "dest": "NV"
      },
      {
          "date": "2021-02-03T03:11:12.798Z",
          "due": "3h27m",
          "operator": "Ride SMART",
          "busId": "GLI27905",
          "price": "32$",
          "seats": 32,
          "source": "RI",
          "dest": "MI"
      },
      {
          "date": "2021-01-15T17:56:31.062Z",
          "due": "4h27m",
          "operator": "Westcat",
          "busId": "GLI16830",
          "price": "10$",
          "seats": 26,
          "source": "HI",
          "dest": "NJ"
      },
      {
          "date": "2021-03-08T04:14:12.814Z",
          "due": "5h38m",
          "operator": "Westcat",
          "busId": "GLI65781",
          "price": "30$",
          "seats": 26,
          "source": "UT",
          "dest": "KY"
      },
      {
          "date": "2021-03-13T02:42:34.310Z",
          "due": "3h42m",
          "operator": "Ride SMART",
          "busId": "GLI21345",
          "price": "12$",
          "seats": 23,
          "source": "UT",
          "dest": "MS"
      },
      {
          "date": "2021-02-01T15:54:56.123Z",
          "due": "5h51m",
          "operator": "Citilink",
          "busId": "GLI56186",
          "price": "21$",
          "seats": 23,
          "source": "NM",
          "dest": "MO"
      },
      {
          "date": "2021-02-21T04:03:33.463Z",
          "due": "4h49m",
          "operator": "Westcat",
          "busId": "GLI42437",
          "price": "29$",
          "seats": 22,
          "source": "SD",
          "dest": "IA"
      },
      {
          "date": "2021-02-24T00:50:47.735Z",
          "due": "4h35m",
          "operator": "Westcat",
          "busId": "GLI58048",
          "price": "23$",
          "seats": 23,
          "source": "MD",
          "dest": "AK"
      },
      {
          "date": "2021-02-15T11:06:06.161Z",
          "due": "4h47m",
          "operator": "Citilink",
          "busId": "GLI25545",
          "price": "38$",
          "seats": 20,
          "source": "WY",
          "dest": "NY"
      },
      {
          "date": "2021-01-20T00:05:26.146Z",
          "due": "3h50m",
          "operator": "Ride SMART",
          "busId": "GLI85243",
          "price": "17$",
          "seats": 27,
          "dest": "UT"
      },
      {
          "date": "2021-02-13T10:54:31.926Z",
          "due": "4h24m",
          "operator": "Citilink",
          "busId": "GLI82323",
          "price": "22$",
          "seats": 27,
          "source": "LA",
          "dest": "IL"
      },
      {
          "date": "2021-03-11T00:31:53.997Z",
          "due": "3h48m",
          "operator": "Westcat",
          "busId": "GLI96134",
          "price": "25$",
          "seats": 20,
          "source": "RI",
          "dest": "SD"
      },
      {
          "date": "2021-02-15T00:16:26.323Z",
          "due": "3h55m",
          "operator": "Ride SMART",
          "busId": "GLI52408",
          "price": "11$",
          "seats": 16,
          "source": "VT",
          "dest": "WI"
      },
      {
          "date": "2021-03-04T14:09:44.576Z",
          "due": "5h21m",
          "operator": "Ride SMART",
          "busId": "GLI68886",
          "price": "31$",
          "seats": 23,
          "source": "VA",
          "dest": "ID"
      },
      {
          "date": "2021-01-11T17:34:28.594Z",
          "due": "3h4m",
          "operator": "Westcat",
          "busId": "GLI71943",
          "price": "19$",
          "seats": 35,
          "source": "HI",
          "dest": "ID"
      },
      {
          "date": "2021-02-16T22:19:39.001Z",
          "due": "5h22m",
          "operator": "Ride SMART",
          "busId": "GLI98133",
          "price": "40$",
          "seats": 36,
          "source": "TN",
          "dest": "TX"
      },
      {
          "date": "2021-03-11T08:52:14.183Z",
          "due": "3h23m",
          "operator": "Westcat",
          "busId": "GLI57797",
          "price": "16$",
          "seats": 28,
          "source": "NC",
          "dest": "WY"
      },
      {
          "date": "2021-03-11T09:58:28.412Z",
          "due": "5h51m",
          "operator": "Citilink",
          "busId": "GLI73820",
          "price": "33$",
          "seats": 27,
          "source": "MD",
          "dest": "MS"
      },
      {
          "date": "2021-02-04T03:24:34.009Z",
          "due": "5h7m",
          "operator": "Westcat",
          "busId": "GLI93675",
          "price": "37$",
          "seats": 20,
          "source": "AR",
          "dest": "LA"
      },
      {
          "date": "2021-02-13T05:05:48.757Z",
          "due": "5h18m",
          "operator": "Ride SMART",
          "busId": "GLI42470",
          "price": "10$",
          "seats": 38,
          "source": "AR",
          "dest": "MN"
      },
      {
          "date": "2021-02-11T09:28:49.141Z",
          "due": "5h19m",
          "operator": "Westcat",
          "busId": "GLI95692",
          "price": "22$",
          "seats": 22,
          "source": "MD",
          "dest": "VT"
      },
      {
          "date": "2021-01-26T07:06:46.562Z",
          "due": "5h28m",
          "operator": "Ride SMART",
          "busId": "GLI25295",
          "price": "21$",
          "seats": 20,
          "source": "ME",
          "dest": "OR"
      },
      {
          "date": "2021-03-10T10:59:23.177Z",
          "due": "5h6m",
          "operator": "Ride SMART",
          "busId": "GLI49709",
          "price": "39$",
          "seats": 27,
          "source": "GA",
          "dest": "PA"
      },
      {
          "date": "2021-02-15T02:01:41.699Z",
          "due": "5h25m",
          "operator": "Ride SMART",
          "busId": "GLI76220",
          "price": "28$",
          "seats": 28,
          "source": "MT",
          "dest": "WA"
      },
      {
          "date": "2021-03-11T18:36:00.725Z",
          "due": "5h50m",
          "operator": "Westcat",
          "busId": "GLI63522",
          "price": "30$",
          "seats": 38,
          "source": "NM",
          "dest": "CT"
      },
      {
          "date": "2021-01-28T22:23:44.488Z",
          "due": "5h56m",
          "operator": "Citilink",
          "busId": "GLI49707",
          "price": "13$",
          "seats": 16,
          "source": "NH",
          "dest": "NV"
      },
      {
          "date": "2021-02-03T08:33:46.139Z",
          "due": "5h59m",
          "operator": "Ride SMART",
          "busId": "GLI34476",
          "price": "18$",
          "seats": 25,
          "source": "NJ",
          "dest": "IL"
      },
      {
          "date": "2021-01-02T15:11:33.168Z",
          "due": "3h12m",
          "operator": "Ride SMART",
          "busId": "GLI70805",
          "price": "16$",
          "seats": 20,
          "source": "UT",
          "dest": "NM"
      },
      {
          "date": "2021-01-20T16:21:00.435Z",
          "due": "3h58m",
          "operator": "Westcat",
          "busId": "GLI98871",
          "price": "16$",
          "seats": 36,
          "source": "NH",
          "dest": "OK"
      },
      {
          "date": "2021-01-27T03:39:05.855Z",
          "due": "5h27m",
          "operator": "Westcat",
          "busId": "GLI58253",
          "price": "38$",
          "seats": 30,
          "source": "NV",
          "dest": "CO"
      },
      {
          "date": "2021-02-06T00:21:34.796Z",
          "due": "4h36m",
          "operator": "Westcat",
          "busId": "GLI13712",
          "price": "19$",
          "seats": 18,
          "source": "MN",
          "dest": "NY"
      },
      {
          "date": "2021-03-12T20:37:05.554Z",
          "due": "4h23m",
          "operator": "Westcat",
          "busId": "GLI35112",
          "price": "40$",
          "seats": 32,
          "source": "MN",
          "dest": "LA"
      },
      {
          "date": "2021-01-29T16:31:54.054Z",
          "due": "5h55m",
          "operator": "Westcat",
          "busId": "GLI56328",
          "price": "37$",
          "seats": 31,
          "source": "IA",
          "dest": "NC"
      },
      {
          "date": "2021-01-06T15:11:46.347Z",
          "due": "5h42m",
          "operator": "Ride SMART",
          "busId": "GLI56489",
          "price": "19$",
          "seats": 25,
          "source": "VT",
          "dest": "OR"
      },
      {
          "date": "2021-01-07T08:56:57.037Z",
          "due": "3h59m",
          "operator": "Westcat",
          "busId": "GLI57934",
          "price": "24$",
          "seats": 15,
          "source": "VT",
          "dest": "MO"
      },
      {
          "date": "2021-02-09T11:56:49.640Z",
          "due": "5h4m",
          "operator": "Citilink",
          "busId": "GLI20407",
          "price": "30$",
          "seats": 19,
          "source": "NM",
          "dest": "DE"
      },
      {
          "date": "2021-02-08T21:41:43.855Z",
          "due": "4h53m",
          "operator": "Citilink",
          "busId": "GLI74762",
          "price": "20$",
          "seats": 23,
          "source": "DE",
          "dest": "ID"
      },
      {
          "date": "2021-01-18T05:22:36.803Z",
          "due": "3h51m",
          "operator": "Westcat",
          "busId": "GLI47903",
          "price": "12$",
          "seats": 29,
          "source": "NV",
          "dest": "IL"
      },
      {
          "date": "2021-02-21T08:08:30.157Z",
          "due": "4h30m",
          "operator": "Westcat",
          "busId": "GLI28734",
          "price": "35$",
          "seats": 16,
          "source": "MI",
          "dest": "OH"
      },
      {
          "date": "2021-02-15T15:47:35.141Z",
          "due": "4h2m",
          "operator": "Citilink",
          "busId": "GLI28254",
          "price": "18$",
          "seats": 27,
          "source": "AK",
          "dest": "WI"
      },
      {
          "date": "2021-03-12T00:45:31.819Z",
          "due": "5h35m",
          "operator": "Westcat",
          "busId": "GLI81306",
          "price": "27$",
          "seats": 20,
          "source": "ND",
          "dest": "MD"
      },
      {
          "date": "2021-01-24T21:46:46.806Z",
          "due": "5h53m",
          "operator": "Westcat",
          "busId": "GLI29223",
          "price": "16$",
          "seats": 28,
          "dest": "GA"
      },
      {
          "date": "2021-01-30T22:30:54.503Z",
          "due": "4h22m",
          "operator": "Westcat",
          "busId": "GLI15200",
          "price": "11$",
          "seats": 21,
          "source": "SC"
      },
      {
          "date": "2021-03-05T19:11:44.392Z",
          "due": "3h39m",
          "operator": "Ride SMART",
          "busId": "GLI89217",
          "price": "35$",
          "seats": 23,
          "source": "TN",
          "dest": "FL"
      },
      {
          "date": "2021-01-27T05:33:18.570Z",
          "due": "5h29m",
          "operator": "Citilink",
          "busId": "GLI51547",
          "price": "39$",
          "seats": 38,
          "source": "AZ",
          "dest": "NJ"
      },
      {
          "date": "2021-02-22T10:47:30.449Z",
          "due": "4h28m",
          "operator": "Ride SMART",
          "busId": "GLI49952",
          "price": "15$",
          "seats": 16,
          "source": "NH",
          "dest": "WA"
      },
      {
          "date": "2021-01-29T09:23:15.911Z",
          "due": "3h23m",
          "operator": "Citilink",
          "busId": "GLI15588",
          "price": "12$",
          "seats": 23,
          "source": "AR",
          "dest": "MI"
      },
      {
          "date": "2021-02-21T16:06:09.256Z",
          "due": "3h27m",
          "operator": "Ride SMART",
          "busId": "GLI35223",
          "price": "19$",
          "seats": 29,
          "source": "NH",
          "dest": "HI"
      },
      {
          "date": "2021-02-09T19:29:45.482Z",
          "due": "4h56m",
          "operator": "Citilink",
          "busId": "GLI68978",
          "price": "15$",
          "seats": 30,
          "source": "UT",
          "dest": "GA"
      },
      {
          "date": "2021-01-28T21:09:17.351Z",
          "due": "5h5m",
          "operator": "Citilink",
          "busId": "GLI18825",
          "price": "39$",
          "seats": 18,
          "source": "WI",
          "dest": "FL"
      },
      {
          "date": "2021-01-05T06:19:44.893Z",
          "due": "3h53m",
          "operator": "Ride SMART",
          "busId": "GLI25428",
          "price": "36$",
          "seats": 28,
          "source": "TN",
          "dest": "PA"
      },
      {
          "date": "2021-01-24T08:38:25.231Z",
          "due": "5h50m",
          "operator": "Ride SMART",
          "busId": "GLI41623",
          "price": "31$",
          "seats": 20,
          "source": "AK",
          "dest": "TN"
      },
      {
          "date": "2021-01-10T15:12:04.603Z",
          "due": "3h6m",
          "operator": "Ride SMART",
          "busId": "GLI45793",
          "price": "13$",
          "seats": 27,
          "source": "GA",
          "dest": "OK"
      },
      {
          "date": "2021-03-06T10:09:52.556Z",
          "due": "3h46m",
          "operator": "Westcat",
          "busId": "GLI26499",
          "price": "27$",
          "seats": 33,
          "source": "RI",
          "dest": "ND"
      },
      {
          "date": "2021-01-19T20:58:40.930Z",
          "due": "4h52m",
          "operator": "Westcat",
          "busId": "GLI76670",
          "price": "24$",
          "seats": 36,
          "dest": "RI"
      },
      {
          "date": "2021-01-26T08:40:59.582Z",
          "due": "5h45m",
          "operator": "Ride SMART",
          "busId": "GLI51678",
          "price": "18$",
          "seats": 30,
          "source": "NM",
          "dest": "NE"
      },
      {
          "date": "2021-02-27T06:11:45.789Z",
          "due": "3h10m",
          "operator": "Citilink",
          "busId": "GLI32432",
          "price": "10$",
          "seats": 20,
          "source": "WA",
          "dest": "UT"
      },
      {
          "date": "2021-01-07T07:09:04.471Z",
          "due": "5h59m",
          "operator": "Westcat",
          "busId": "GLI66438",
          "price": "28$",
          "seats": 22,
          "source": "AL",
          "dest": "LA"
      },
      {
          "date": "2021-02-10T07:33:01.308Z",
          "due": "5h26m",
          "operator": "Ride SMART",
          "busId": "GLI95179",
          "price": "37$",
          "seats": 39,
          "source": "AR",
          "dest": "TX"
      },
      {
          "date": "2021-01-21T16:31:35.089Z",
          "due": "5h56m",
          "operator": "Ride SMART",
          "busId": "GLI77766",
          "price": "33$",
          "seats": 35,
          "source": "CT",
          "dest": "FL"
      },
      {
          "date": "2021-03-14T13:47:13.785Z",
          "due": "5h24m",
          "operator": "Citilink",
          "busId": "GLI42982",
          "price": "29$",
          "seats": 31,
          "source": "CT",
          "dest": "OH"
      },
      {
          "date": "2021-02-15T13:05:33.964Z",
          "due": "4h3m",
          "operator": "Ride SMART",
          "busId": "GLI94760",
          "price": "28$",
          "seats": 32,
          "source": "SC",
          "dest": "SD"
      },
      {
          "date": "2021-02-02T21:21:02.395Z",
          "due": "4h24m",
          "operator": "Ride SMART",
          "busId": "GLI37480",
          "price": "15$",
          "seats": 25,
          "source": "OK",
          "dest": "AK"
      },
      {
          "date": "2021-01-25T23:19:50.145Z",
          "due": "5h33m",
          "operator": "Ride SMART",
          "busId": "GLI94578",
          "price": "37$",
          "seats": 25,
          "source": "NM",
          "dest": "NY"
      },
      {
          "date": "2021-03-08T10:18:56.272Z",
          "due": "3h28m",
          "operator": "Citilink",
          "busId": "GLI95169",
          "price": "29$",
          "seats": 16,
          "source": "MD",
          "dest": "VA"
      },
      {
          "date": "2021-02-05T09:02:23.933Z",
          "due": "4h14m",
          "operator": "Ride SMART",
          "busId": "GLI39071",
          "price": "30$",
          "seats": 23,
          "source": "VA",
          "dest": "MI"
      },
      {
          "date": "2021-01-29T09:43:06.791Z",
          "due": "4h41m",
          "operator": "Ride SMART",
          "busId": "GLI70628",
          "price": "34$",
          "seats": 25,
          "source": "PA",
          "dest": "MA"
      },
      {
          "date": "2021-02-18T22:34:28.424Z",
          "due": "3h44m",
          "operator": "Citilink",
          "busId": "GLI15078",
          "price": "19$",
          "seats": 29,
          "source": "SD",
          "dest": "NJ"
      },
      {
          "date": "2021-02-28T09:02:17.562Z",
          "due": "3h3m",
          "operator": "Westcat",
          "busId": "GLI94457",
          "price": "17$",
          "seats": 25,
          "source": "KY",
          "dest": "PA"
      },
      {
          "date": "2021-01-31T05:52:38.806Z",
          "due": "5h32m",
          "operator": "Citilink",
          "busId": "GLI45754",
          "price": "36$",
          "seats": 36,
          "source": "CA",
          "dest": "IL"
      },
      {
          "date": "2021-01-13T01:46:43.515Z",
          "due": "4h14m",
          "operator": "Ride SMART",
          "busId": "GLI24748",
          "price": "36$",
          "seats": 28,
          "source": "ID",
          "dest": "WA"
      },
      {
          "date": "2021-01-18T04:22:24.628Z",
          "due": "4h48m",
          "operator": "Citilink",
          "busId": "GLI22538",
          "price": "24$",
          "seats": 23,
          "source": "AZ",
          "dest": "UT"
      },
      {
          "date": "2021-01-08T23:00:28.027Z",
          "due": "5h57m",
          "operator": "Citilink",
          "busId": "GLI62815",
          "price": "20$",
          "seats": 22,
          "source": "RI",
          "dest": "IL"
      },
      {
          "date": "2021-03-05T01:11:46.533Z",
          "due": "4h43m",
          "operator": "Westcat",
          "busId": "GLI96104",
          "price": "37$",
          "seats": 25,
          "source": "ME",
          "dest": "NC"
      },
      {
          "date": "2021-01-24T17:17:05.752Z",
          "due": "5h55m",
          "operator": "Westcat",
          "busId": "GLI26202",
          "price": "18$",
          "seats": 16,
          "source": "MS",
          "dest": "OH"
      },
      {
          "date": "2021-03-04T02:35:19.352Z",
          "due": "4h50m",
          "operator": "Ride SMART",
          "busId": "GLI90636",
          "price": "31$",
          "seats": 31,
          "source": "NE",
          "dest": "PA"
      },
      {
          "date": "2021-03-04T23:39:42.886Z",
          "due": "5h16m",
          "operator": "Citilink",
          "busId": "GLI69709",
          "price": "36$",
          "seats": 34,
          "source": "KY",
          "dest": "OH"
      },
      {
          "date": "2021-02-26T02:34:18.344Z",
          "due": "3h28m",
          "operator": "Citilink",
          "busId": "GLI56743",
          "price": "16$",
          "seats": 38,
          "source": "CA",
          "dest": "WY"
      },
      {
          "date": "2021-02-18T07:30:33.876Z",
          "due": "3h11m",
          "operator": "Ride SMART",
          "busId": "GLI97007",
          "price": "21$",
          "seats": 23,
          "source": "WY",
          "dest": "MD"
      },
      {
          "date": "2021-01-23T19:10:45.691Z",
          "due": "3h47m",
          "operator": "Ride SMART",
          "busId": "GLI52793",
          "price": "10$",
          "seats": 21,
          "source": "WY",
          "dest": "WY"
      },
      {
          "date": "2021-01-25T13:48:30.935Z",
          "due": "3h25m",
          "operator": "Ride SMART",
          "busId": "GLI74774",
          "price": "38$",
          "seats": 25,
          "source": "WA",
          "dest": "UT"
      },
      {
          "date": "2021-02-25T16:14:25.035Z",
          "due": "4h17m",
          "operator": "Citilink",
          "busId": "GLI49138",
          "price": "11$",
          "seats": 21,
          "source": "PA",
          "dest": "KY"
      },
      {
          "date": "2021-02-22T09:25:01.738Z",
          "due": "3h36m",
          "operator": "Ride SMART",
          "busId": "GLI85008",
          "price": "15$",
          "seats": 21,
          "source": "PA",
          "dest": "IN"
      },
      {
          "date": "2021-01-26T08:29:13.763Z",
          "due": "3h9m",
          "operator": "Westcat",
          "busId": "GLI24315",
          "price": "30$",
          "seats": 31,
          "source": "SC",
          "dest": "TX"
      },
      {
          "date": "2021-01-26T10:10:12.116Z",
          "due": "3h16m",
          "operator": "Ride SMART",
          "busId": "GLI40783",
          "price": "14$",
          "seats": 32,
          "source": "MO",
          "dest": "IA"
      },
      {
          "date": "2021-03-10T21:35:01.904Z",
          "due": "5h42m",
          "operator": "Westcat",
          "busId": "GLI29363",
          "price": "18$",
          "seats": 40,
          "source": "TX",
          "dest": "ME"
      },
      {
          "date": "2021-01-14T08:41:45.064Z",
          "due": "4h3m",
          "operator": "Westcat",
          "busId": "GLI91487",
          "price": "33$",
          "seats": 37,
          "source": "IN",
          "dest": "LA"
      },
      {
          "date": "2021-01-24T05:02:28.180Z",
          "due": "5h40m",
          "operator": "Citilink",
          "busId": "GLI46489",
          "price": "33$",
          "seats": 19,
          "source": "RI",
          "dest": "AR"
      },
      {
          "date": "2021-01-31T16:32:33.567Z",
          "due": "4h58m",
          "operator": "Ride SMART",
          "busId": "GLI68320",
          "price": "10$",
          "seats": 15,
          "source": "VT",
          "dest": "FL"
      },
      {
          "date": "2021-02-14T23:08:00.144Z",
          "due": "3h28m",
          "operator": "Citilink",
          "busId": "GLI67693",
          "price": "29$",
          "seats": 20,
          "source": "ME",
          "dest": "KY"
      },
      {
          "date": "2021-02-15T23:14:57.351Z",
          "due": "3h7m",
          "operator": "Ride SMART",
          "busId": "GLI21676",
          "price": "35$",
          "seats": 35,
          "source": "MO",
          "dest": "AZ"
      },
      {
          "date": "2021-01-30T20:34:14.869Z",
          "due": "4h21m",
          "operator": "Citilink",
          "busId": "GLI97453",
          "price": "15$",
          "seats": 21,
          "source": "TN",
          "dest": "MS"
      },
      {
          "date": "2021-01-31T03:28:38.479Z",
          "due": "3h18m",
          "operator": "Westcat",
          "busId": "GLI55033",
          "price": "16$",
          "seats": 24,
          "source": "CO",
          "dest": "OR"
      },
      {
          "date": "2021-01-14T10:20:27.518Z",
          "due": "3h51m",
          "operator": "Westcat",
          "busId": "GLI99424",
          "price": "38$",
          "seats": 30,
          "source": "KS",
          "dest": "AR"
      },
      {
          "date": "2021-01-20T11:28:07.617Z",
          "due": "5h57m",
          "operator": "Citilink",
          "busId": "GLI59802",
          "price": "29$",
          "seats": 36,
          "source": "ND",
          "dest": "WI"
      },
      {
          "date": "2021-01-02T19:19:36.334Z",
          "due": "4h41m",
          "operator": "Ride SMART",
          "busId": "GLI44744",
          "price": "23$",
          "seats": 37,
          "source": "MD",
          "dest": "MO"
      },
      {
          "date": "2021-01-13T17:28:12.175Z",
          "due": "3h41m",
          "operator": "Westcat",
          "busId": "GLI16053",
          "price": "34$",
          "seats": 35,
          "source": "MN",
          "dest": "NH"
      },
      {
          "date": "2021-02-18T18:23:59.787Z",
          "due": "5h2m",
          "operator": "Ride SMART",
          "busId": "GLI88769",
          "price": "18$",
          "seats": 30,
          "source": "NC",
          "dest": "NH"
      },
      {
          "date": "2021-01-08T10:28:02.638Z",
          "due": "3h41m",
          "operator": "Ride SMART",
          "busId": "GLI29039",
          "price": "33$",
          "seats": 27,
          "source": "NE",
          "dest": "SC"
      },
      {
          "date": "2021-01-26T16:22:54.290Z",
          "due": "3h48m",
          "operator": "Westcat",
          "busId": "GLI49271",
          "price": "34$",
          "seats": 29,
          "source": "VT",
          "dest": "IA"
      },
      {
          "date": "2021-02-27T05:27:07.256Z",
          "due": "4h28m",
          "operator": "Citilink",
          "busId": "GLI55339",
          "price": "36$",
          "seats": 28,
          "source": "OR",
          "dest": "NJ"
      },
      {
          "date": "2021-02-05T23:02:24.791Z",
          "due": "5h17m",
          "operator": "Ride SMART",
          "busId": "GLI72345",
          "price": "40$",
          "seats": 29,
          "source": "MA",
          "dest": "MI"
      },
      {
          "date": "2021-01-04T08:31:00.521Z",
          "due": "4h55m",
          "operator": "Citilink",
          "busId": "GLI64437",
          "price": "37$",
          "seats": 17,
          "source": "OH",
          "dest": "AR"
      },
      {
          "date": "2021-02-18T19:46:50.245Z",
          "due": "3h59m",
          "operator": "Ride SMART",
          "busId": "GLI97317",
          "price": "17$",
          "seats": 33,
          "source": "NJ",
          "dest": "AL"
      },
      {
          "date": "2021-02-03T06:11:02.617Z",
          "due": "3h15m",
          "operator": "Citilink",
          "busId": "GLI16564",
          "price": "20$",
          "seats": 34,
          "source": "AL",
          "dest": "GA"
      },
      {
          "date": "2021-01-06T18:44:22.143Z",
          "due": "5h38m",
          "operator": "Citilink",
          "busId": "GLI31727",
          "price": "13$",
          "seats": 28,
          "source": "WY",
          "dest": "IN"
      },
      {
          "date": "2021-01-22T15:30:00.344Z",
          "due": "3h14m",
          "operator": "Citilink",
          "busId": "GLI24683",
          "price": "22$",
          "seats": 16,
          "source": "SC",
          "dest": "WV"
      },
      {
          "date": "2021-02-09T16:38:57.741Z",
          "due": "3h51m",
          "operator": "Ride SMART",
          "busId": "GLI21044",
          "price": "16$",
          "seats": 27,
          "source": "WA",
          "dest": "ND"
      },
      {
          "date": "2021-02-12T17:41:55.083Z",
          "due": "3h39m",
          "operator": "Ride SMART",
          "busId": "GLI63425",
          "price": "36$",
          "seats": 27,
          "source": "CT",
          "dest": "WA"
      },
      {
          "date": "2021-03-13T22:39:07.110Z",
          "due": "4h31m",
          "operator": "Westcat",
          "busId": "GLI74037",
          "price": "35$",
          "seats": 33,
          "source": "MO",
          "dest": "NV"
      },
      {
          "date": "2021-03-05T06:08:50.349Z",
          "due": "5h47m",
          "operator": "Westcat",
          "busId": "GLI25447",
          "price": "33$",
          "seats": 24,
          "source": "MD",
          "dest": "MI"
      },
      {
          "date": "2021-02-11T03:40:51.537Z",
          "due": "5h13m",
          "operator": "Citilink",
          "busId": "GLI32459",
          "price": "29$",
          "seats": 39,
          "source": "AZ",
          "dest": "GA"
      },
      {
          "date": "2021-02-03T22:25:02.557Z",
          "due": "4h50m",
          "operator": "Ride SMART",
          "busId": "GLI23829",
          "price": "40$",
          "seats": 28,
          "source": "MI",
          "dest": "WA"
      },
      {
          "date": "2021-01-06T12:49:11.214Z",
          "due": "4h31m",
          "operator": "Citilink",
          "busId": "GLI58337",
          "price": "26$",
          "seats": 34,
          "source": "CT",
          "dest": "ND"
      },
      {
          "date": "2021-03-03T16:02:29.858Z",
          "due": "4h43m",
          "operator": "Westcat",
          "busId": "GLI68187",
          "price": "34$",
          "seats": 38,
          "source": "NJ",
          "dest": "FL"
      },
      {
          "date": "2021-01-21T22:40:30.627Z",
          "due": "3h38m",
          "operator": "Citilink",
          "busId": "GLI35939",
          "price": "35$",
          "seats": 21,
          "source": "NV",
          "dest": "OK"
      },
      {
          "date": "2021-01-17T17:48:24.321Z",
          "due": "4h55m",
          "operator": "Westcat",
          "busId": "GLI93469",
          "price": "29$",
          "seats": 32,
          "source": "MA",
          "dest": "AL"
      },
      {
          "date": "2021-02-21T08:28:08.966Z",
          "due": "5h33m",
          "operator": "Westcat",
          "busId": "GLI38325",
          "price": "17$",
          "seats": 23,
          "source": "MO",
          "dest": "IL"
      },
      {
          "date": "2021-01-23T23:59:35.159Z",
          "due": "3h56m",
          "operator": "Ride SMART",
          "busId": "GLI36648",
          "price": "39$",
          "seats": 33,
          "source": "AK",
          "dest": "KY"
      },
      {
          "date": "2021-01-12T06:29:58.859Z",
          "due": "4h15m",
          "operator": "Westcat",
          "busId": "GLI77166",
          "price": "21$",
          "seats": 26,
          "source": "MS",
          "dest": "NV"
      },
      {
          "date": "2021-01-04T14:29:40.696Z",
          "due": "4h35m",
          "operator": "Ride SMART",
          "busId": "GLI44811",
          "price": "15$",
          "seats": 34,
          "source": "NY",
          "dest": "TX"
      },
      {
          "date": "2021-01-31T06:47:53.956Z",
          "due": "3h37m",
          "operator": "Westcat",
          "busId": "GLI49192",
          "price": "26$",
          "seats": 15,
          "source": "DE",
          "dest": "VA"
      },
      {
          "date": "2021-01-28T11:55:27.475Z",
          "due": "4h41m",
          "operator": "Citilink",
          "busId": "GLI61532",
          "price": "11$",
          "seats": 30,
          "source": "SC",
          "dest": "WI"
      },
      {
          "date": "2021-01-19T07:03:12.035Z",
          "due": "5h46m",
          "operator": "Westcat",
          "busId": "GLI97090",
          "price": "31$",
          "seats": 38,
          "source": "AL",
          "dest": "MN"
      },
      {
          "date": "2021-01-02T21:58:54.268Z",
          "due": "3h59m",
          "operator": "Citilink",
          "busId": "GLI81466",
          "price": "25$",
          "seats": 38,
          "source": "DE",
          "dest": "CO"
      },
      {
          "date": "2021-02-15T13:15:59.862Z",
          "due": "5h34m",
          "operator": "Citilink",
          "busId": "GLI86999",
          "price": "35$",
          "seats": 39,
          "source": "TX",
          "dest": "WY"
      },
      {
          "date": "2021-01-10T10:48:22.883Z",
          "due": "5h47m",
          "operator": "Citilink",
          "busId": "GLI36169",
          "price": "27$",
          "seats": 39,
          "source": "WY",
          "dest": "RI"
      },
      {
          "date": "2021-02-28T23:12:38.699Z",
          "due": "3h36m",
          "operator": "Westcat",
          "busId": "GLI17775",
          "price": "28$",
          "seats": 18,
          "source": "ND",
          "dest": "KY"
      },
      {
          "date": "2021-02-12T20:28:03.520Z",
          "due": "4h44m",
          "operator": "Westcat",
          "busId": "GLI47877",
          "price": "18$",
          "seats": 24,
          "source": "NH",
          "dest": "MS"
      },
      {
          "date": "2021-02-10T06:17:48.211Z",
          "due": "5h47m",
          "operator": "Ride SMART",
          "busId": "GLI51925",
          "price": "26$",
          "seats": 37,
          "source": "DE",
          "dest": "ND"
      },
      {
          "date": "2021-02-22T00:28:10.517Z",
          "due": "4h23m",
          "operator": "Westcat",
          "busId": "GLI31894",
          "price": "12$",
          "seats": 20,
          "source": "CT",
          "dest": "MI"
      },
      {
          "date": "2021-03-03T22:25:28.938Z",
          "due": "5h23m",
          "operator": "Ride SMART",
          "busId": "GLI56233",
          "price": "32$",
          "seats": 15,
          "source": "OH",
          "dest": "MD"
      },
      {
          "date": "2021-02-17T12:16:04.319Z",
          "due": "4h32m",
          "operator": "Citilink",
          "busId": "GLI92738",
          "price": "10$",
          "seats": 20,
          "source": "MO",
          "dest": ""
      },
      {
          "date": "2021-01-12T11:20:50.834Z",
          "due": "4h51m",
          "operator": "Westcat",
          "busId": "GLI36906",
          "price": "39$",
          "seats": 28,
          "source": "OK",
          "dest": "CT"
      },
      {
          "date": "2021-03-14T11:12:02.275Z",
          "due": "4h43m",
          "operator": "Citilink",
          "busId": "GLI38191",
          "price": "36$",
          "seats": 29,
          "source": "SC",
          "dest": "PA"
      },
      {
          "date": "2021-01-05T18:27:45.607Z",
          "due": "4h14m",
          "operator": "Ride SMART",
          "busId": "GLI85682",
          "price": "10$",
          "seats": 40,
          "source": "OR",
          "dest": "HI"
      },
      {
          "date": "2021-01-06T01:32:57.683Z",
          "due": "3h39m",
          "operator": "Ride SMART",
          "busId": "GLI34790",
          "price": "23$",
          "seats": 38,
          "source": "KY",
          "dest": "AZ"
      },
      {
          "date": "2021-01-24T18:00:31.267Z",
          "due": "4h55m",
          "operator": "Westcat",
          "busId": "GLI48315",
          "price": "36$",
          "seats": 35,
          "source": "CT",
          "dest": "IL"
      },
      {
          "date": "2021-02-27T08:43:36.284Z",
          "due": "3h22m",
          "operator": "Citilink",
          "busId": "GLI26522",
          "price": "17$",
          "seats": 28,
          "source": "AK",
          "dest": "CO"
      },
      {
          "date": "2021-03-04T14:27:45.619Z",
          "due": "3h49m",
          "operator": "Citilink",
          "busId": "GLI96696",
          "price": "30$",
          "seats": 34,
          "source": "DE",
          "dest": "NE"
      },
      {
          "date": "2021-03-08T02:33:08.930Z",
          "due": "3h14m",
          "operator": "Citilink",
          "busId": "GLI72136",
          "price": "32$",
          "seats": 21,
          "source": "KS",
          "dest": "CA"
      },
      {
          "date": "2021-02-11T21:29:27.208Z",
          "due": "4h2m",
          "operator": "Ride SMART",
          "busId": "GLI37426",
          "price": "28$",
          "seats": 31,
          "source": "MN",
          "dest": "AR"
      },
      {
          "date": "2021-01-29T01:35:56.898Z",
          "due": "3h43m",
          "operator": "Ride SMART",
          "busId": "GLI24544",
          "price": "23$",
          "seats": 34,
          "source": "VA",
          "dest": "NC"
      },
      {
          "date": "2021-02-20T04:15:33.786Z",
          "due": "4h26m",
          "operator": "Citilink",
          "busId": "GLI95989",
          "price": "29$",
          "seats": 23,
          "source": "MN",
          "dest": "MI"
      },
      {
          "date": "2021-02-08T11:26:45.039Z",
          "due": "3h55m",
          "operator": "Citilink",
          "busId": "GLI26990",
          "price": "12$",
          "seats": 35,
          "source": "CA",
          "dest": ""
      },
      {
          "date": "2021-01-12T05:16:06.013Z",
          "due": "4h37m",
          "operator": "Citilink",
          "busId": "GLI15938",
          "price": "24$",
          "seats": 24,
          "source": "MS",
          "dest": "IA"
      },
      {
          "date": "2021-01-06T23:14:55.122Z",
          "due": "4h17m",
          "operator": "Westcat",
          "busId": "GLI20801",
          "price": "22$",
          "seats": 34,
          "source": "ID",
          "dest": "AR"
      },
      {
          "date": "2021-02-01T12:57:02.110Z",
          "due": "3h41m",
          "operator": "Westcat",
          "busId": "GLI19697",
          "price": "10$",
          "seats": 20,
          "source": "CA",
          "dest": "DE"
      },
      {
          "date": "2021-01-21T16:30:52.169Z",
          "due": "3h2m",
          "operator": "Citilink",
          "busId": "GLI88302",
          "price": "24$",
          "seats": 34,
          "source": "OH",
          "dest": "OK"
      },
      {
          "date": "2021-02-28T14:25:24.129Z",
          "due": "5h14m",
          "operator": "Ride SMART",
          "busId": "GLI29412",
          "price": "14$",
          "seats": 18,
          "source": "AR",
          "dest": "DE"
      },
      {
          "date": "2021-01-04T05:13:56.678Z",
          "due": "5h7m",
          "operator": "Citilink",
          "busId": "GLI14206",
          "price": "29$",
          "seats": 17,
          "source": "SD",
          "dest": "NY"
      },
      {
          "date": "2021-01-22T18:10:54.537Z",
          "due": "4h21m",
          "operator": "Ride SMART",
          "busId": "GLI34949",
          "price": "36$",
          "seats": 19,
          "source": "SD",
          "dest": "MN"
      },
      {
          "date": "2021-01-24T11:56:43.463Z",
          "due": "5h15m",
          "operator": "Westcat",
          "busId": "GLI94770",
          "price": "29$",
          "seats": 38,
          "source": "TX",
          "dest": "LA"
      },
      {
          "date": "2021-03-02T03:37:05.540Z",
          "due": "4h36m",
          "operator": "Ride SMART",
          "busId": "GLI22010",
          "price": "21$",
          "seats": 26,
          "source": "OH",
          "dest": "MS"
      },
      {
          "date": "2021-01-10T20:29:30.386Z",
          "due": "3h13m",
          "operator": "Citilink",
          "busId": "GLI77159",
          "price": "17$",
          "seats": 23,
          "source": "MT",
          "dest": "KS"
      },
      {
          "date": "2021-01-18T15:00:55.787Z",
          "due": "5h39m",
          "operator": "Citilink",
          "busId": "GLI36162",
          "price": "35$",
          "seats": 27,
          "source": "ME",
          "dest": "AL"
      },
      {
          "date": "2021-01-20T07:17:27.083Z",
          "due": "4h53m",
          "operator": "Citilink",
          "busId": "GLI57598",
          "price": "31$",
          "seats": 40,
          "source": "CO",
          "dest": "ND"
      },
      {
          "date": "2021-03-10T09:10:57.367Z",
          "due": "5h3m",
          "operator": "Ride SMART",
          "busId": "GLI97956",
          "price": "31$",
          "seats": 30,
          "source": "IL",
          "dest": ""
      },
      {
          "date": "2021-01-15T10:05:35.031Z",
          "due": "4h43m",
          "operator": "Ride SMART",
          "busId": "GLI82453",
          "price": "40$",
          "seats": 36,
          "source": "AR",
          "dest": "MD"
      },
      {
          "date": "2021-02-06T12:23:07.892Z",
          "due": "5h26m",
          "operator": "Citilink",
          "busId": "GLI54842",
          "price": "34$",
          "seats": 35,
          "source": "AZ",
          "dest": "ME"
      },
      {
          "date": "2021-01-11T11:34:08.734Z",
          "due": "5h50m",
          "operator": "Ride SMART",
          "busId": "GLI52905",
          "price": "12$",
          "seats": 32,
          "source": "OK",
          "dest": "WY"
      },
      {
          "date": "2021-01-11T02:44:54.696Z",
          "due": "4h50m",
          "operator": "Citilink",
          "busId": "GLI82579",
          "price": "17$",
          "seats": 33,
          "source": "ND",
          "dest": "NJ"
      },
      {
          "date": "2021-02-18T03:09:12.237Z",
          "due": "3h37m",
          "operator": "Westcat",
          "busId": "GLI96288",
          "price": "19$",
          "seats": 37,
          "source": "ID",
          "dest": "FL"
      },
      {
          "date": "2021-03-14T20:41:28.683Z",
          "due": "4h24m",
          "operator": "Westcat",
          "busId": "GLI33331",
          "price": "22$",
          "seats": 29,
          "source": "MN",
          "dest": "SD"
      },
      {
          "date": "2021-02-13T23:14:56.923Z",
          "due": "5h31m",
          "operator": "Ride SMART",
          "source": "",
          "busId": "GLI50863",
          "price": "30$",
          "seats": 28,
          "dest": "WY"
      },
      {
          "date": "2021-01-17T22:33:13.817Z",
          "due": "4h12m",
          "operator": "Citilink",
          "busId": "GLI84591",
          "price": "40$",
          "seats": 36,
          "source": "UT",
          "dest": "FL"
      },
      {
          "date": "2021-01-25T03:58:20.015Z",
          "due": "5h8m",
          "operator": "Westcat",
          "busId": "GLI93542",
          "price": "15$",
          "seats": 28,
          "source": "RI",
          "dest": "NV"
      },
      {
          "date": "2021-03-13T17:43:57.006Z",
          "due": "4h2m",
          "operator": "Ride SMART",
          "busId": "GLI21717",
          "price": "24$",
          "seats": 18,
          "source": "WV",
          "dest": "KS"
      },
      {
          "date": "2021-01-29T19:56:03.984Z",
          "due": "4h5m",
          "operator": "Citilink",
          "busId": "GLI33342",
          "price": "23$",
          "seats": 16,
          "source": "IL",
          "dest": "SD"
      },
      {
          "date": "2021-03-09T17:23:40.587Z",
          "due": "3h26m",
          "operator": "Westcat",
          "busId": "GLI60174",
          "price": "21$",
          "seats": 29,
          "source": "GA",
          "dest": "TX"
      },
      {
          "date": "2021-02-26T12:40:32.580Z",
          "due": "5h19m",
          "operator": "Citilink",
          "busId": "GLI26472",
          "price": "32$",
          "seats": 38,
          "source": "CT",
          "dest": "WY"
      },
      {
          "date": "2021-03-14T14:23:16.472Z",
          "due": "5h16m",
          "operator": "Ride SMART",
          "busId": "GLI23418",
          "price": "14$",
          "seats": 26,
          "source": "CA",
          "dest": "GA"
      },
      {
          "date": "2021-03-05T16:59:14.846Z",
          "due": "3h8m",
          "operator": "Citilink",
          "busId": "GLI46426",
          "price": "11$",
          "seats": 23,
          "source": "GA",
          "dest": "AL"
      },
      {
          "date": "2021-02-01T06:02:31.600Z",
          "due": "5h5m",
          "operator": "Westcat",
          "busId": "GLI85224",
          "price": "39$",
          "seats": 23,
          "source": "SD",
          "dest": "NH"
      },
      {
          "date": "2021-02-28T14:34:56.102Z",
          "due": "4h23m",
          "source": "",
          "operator": "Ride SMART",
          "busId": "GLI60857",
          "price": "16$",
          "seats": 28,
          "dest": "GA"
      },
      {
          "date": "2021-01-30T15:25:22.272Z",
          "due": "5h6m",
          "operator": "Citilink",
          "busId": "GLI77188",
          "price": "35$",
          "seats": 22,
          "source": "MS",
          "dest": "PA"
      },
      {
          "date": "2021-02-16T20:42:26.486Z",
          "due": "4h9m",
          "operator": "Westcat",
          "busId": "GLI66831",
          "price": "11$",
          "seats": 19,
          "source": "SD",
          "dest": "MI"
      },
      {
          "date": "2021-02-26T15:17:20.991Z",
          "due": "3h25m",
          "operator": "Westcat",
          "busId": "GLI20742",
          "price": "26$",
          "seats": 32,
          "source": "TX",
          "dest": "FL"
      },
      {
          "date": "2021-02-01T22:49:55.110Z",
          "due": "4h45m",
          "operator": "Ride SMART",
          "busId": "GLI64861",
          "price": "17$",
          "seats": 26,
          "source": "NV",
          "dest": "MD"
      },
      {
          "date": "2021-02-28T10:13:30.135Z",
          "due": "5h58m",
          "operator": "Ride SMART",
          "busId": "GLI14354",
          "price": "32$",
          "seats": 36,
          "source": "MN",
          "dest": "SC"
      },
      {
          "date": "2021-03-12T16:14:48.951Z",
          "due": "3h25m",
          "operator": "Westcat",
          "busId": "GLI13633",
          "price": "36$",
          "seats": 26,
          "source": "VT",
          "dest": "KY"
      },
      {
          "date": "2021-01-24T05:59:01.834Z",
          "due": "4h46m",
          "operator": "Citilink",
          "busId": "GLI28185",
          "price": "21$",
          "seats": 30,
          "source": "GA",
          "dest": "GA"
      },
      {
          "date": "2021-02-28T19:11:59.557Z",
          "due": "4h35m",
          "operator": "Westcat",
          "busId": "GLI84047",
          "price": "16$",
          "seats": 16,
          "source": "MT",
          "dest": "WY"
      },
      {
          "date": "2021-03-11T21:04:31.339Z",
          "due": "4h21m",
          "operator": "Westcat",
          "busId": "GLI44268",
          "price": "25$",
          "seats": 34,
          "source": "DE",
          "dest": "MI"
      },
      {
          "date": "2021-03-05T07:02:09.175Z",
          "due": "5h19m",
          "operator": "Westcat",
          "busId": "GLI90244",
          "price": "25$",
          "seats": 18,
          "source": "KS",
          "dest": "NC"
      },
      {
          "date": "2021-02-20T21:02:13.460Z",
          "due": "5h50m",
          "operator": "Ride SMART",
          "busId": "GLI76193",
          "price": "30$",
          "seats": 19,
          "source": "PA",
          "dest": "AL"
      },
      {
          "date": "2021-01-09T07:41:10.635Z",
          "due": "3h7m",
          "operator": "Ride SMART",
          "busId": "GLI83367",
          "price": "37$",
          "seats": 18,
          "source": "NC",
          "dest": "NC"
      },
      {
          "date": "2021-02-08T02:12:10.660Z",
          "due": "5h33m",
          "operator": "Ride SMART",
          "busId": "GLI73869",
          "price": "26$",
          "seats": 31,
          "source": "IN",
          "dest": "FL"
      },
      {
          "date": "2021-02-03T06:32:18.722Z",
          "due": "3h57m",
          "operator": "Westcat",
          "busId": "GLI26924",
          "price": "27$",
          "seats": 32,
          "source": "AK",
          "dest": "NC"
      },
      {
          "date": "2021-01-13T11:09:18.651Z",
          "due": "4h36m",
          "operator": "Citilink",
          "busId": "GLI50415",
          "price": "16$",
          "seats": 26,
          "source": "WI",
          "dest": "MT"
      },
      {
          "date": "2021-03-06T06:18:51.100Z",
          "due": "4h26m",
          "operator": "Ride SMART",
          "busId": "GLI20012",
          "price": "23$",
          "seats": 39,
          "source": "CT",
          "dest": "AR"
      },
      {
          "date": "2021-01-10T20:09:39.492Z",
          "due": "4h28m",
          "operator": "Citilink",
          "busId": "GLI33023",
          "price": "11$",
          "seats": 16,
          "source": "SC",
          "dest": "IL"
      },
      {
          "date": "2021-01-25T19:21:28.280Z",
          "due": "4h4m",
          "operator": "Westcat",
          "busId": "GLI23046",
          "price": "17$",
          "seats": 35,
          "source": "AR",
          "dest": "MA"
      },
      {
          "date": "2021-02-12T04:22:54.701Z",
          "due": "4h47m",
          "operator": "Citilink",
          "busId": "GLI99660",
          "price": "34$",
          "seats": 22,
          "source": "KS",
          "dest": "KS"
      },
      {
          "date": "2021-01-30T12:00:06.335Z",
          "due": "3h18m",
          "operator": "Ride SMART",
          "busId": "GLI87901",
          "price": "12$",
          "seats": 36,
          "source": "WI",
          "dest": "CA"
      },
      {
          "date": "2021-01-08T07:41:50.309Z",
          "due": "5h46m",
          "operator": "Ride SMART",
          "busId": "GLI40511",
          "price": "12$",
          "seats": 28,
          "source": "TN",
          "dest": "OH"
      },
      {
          "date": "2021-02-25T12:53:16.502Z",
          "due": "3h41m",
          "operator": "Westcat",
          "busId": "GLI15451",
          "price": "18$",
          "seats": 37,
          "source": "TN",
          "dest": "MN"
      },
      {
          "date": "2021-01-16T20:38:13.641Z",
          "due": "3h45m",
          "operator": "Westcat",
          "busId": "GLI42179",
          "price": "26$",
          "seats": 26,
          "source": "ID",
          "dest": "WV"
      },
      {
          "date": "2021-03-12T02:03:40.620Z",
          "due": "4h55m",
          "operator": "Citilink",
          "busId": "GLI34175",
          "price": "17$",
          "seats": 35,
          "source": "RI",
          "dest": ""
      },
      {
          "date": "2021-02-24T20:05:02.584Z",
          "due": "3h13m",
          "operator": "Ride SMART",
          "busId": "GLI21209",
          "price": "11$",
          "seats": 15,
          "source": "KS",
          "dest": "OR"
      },
      {
          "date": "2021-02-13T16:06:18.342Z",
          "due": "4h6m",
          "operator": "Citilink",
          "busId": "GLI87150",
          "price": "32$",
          "seats": 15,
          "source": "DE",
          "dest": "NV"
      },
      {
          "date": "2021-02-19T16:26:21.356Z",
          "due": "5h21m",
          "operator": "Westcat",
          "busId": "GLI82487",
          "price": "35$",
          "seats": 20,
          "source": "WA",
          "dest": "RI"
      },
      {
          "date": "2021-01-15T03:42:50.574Z",
          "due": "4h16m",
          "operator": "Westcat",
          "busId": "GLI82052",
          "price": "39$",
          "seats": 26,
          "source": "KS",
          "dest": "WI"
      },
      {
          "date": "2021-02-04T08:13:09.239Z",
          "due": "3h18m",
          "operator": "Citilink",
          "busId": "GLI65698",
          "price": "20$",
          "seats": 30,
          "source": "OR",
          "dest": "OR"
      },
      {
          "date": "2021-02-21T15:45:19.567Z",
          "due": "3h31m",
          "operator": "Citilink",
          "busId": "GLI95703",
          "price": "39$",
          "seats": 17,
          "source": "MO",
          "dest": "AZ"
      },
      {
          "date": "2021-01-22T23:26:23.877Z",
          "due": "5h46m",
          "operator": "Ride SMART",
          "busId": "GLI49613",
          "price": "19$",
          "seats": 37,
          "source": "ND",
          "dest": "HI"
      },
      {
          "date": "2021-02-02T23:11:11.760Z",
          "due": "4h56m",
          "operator": "Ride SMART",
          "busId": "GLI68391",
          "price": "40$",
          "seats": 32,
          "source": "AZ",
          "dest": ""
      },
      {
          "date": "2021-02-19T09:16:15.689Z",
          "due": "3h40m",
          "operator": "Westcat",
          "busId": "GLI36867",
          "price": "32$",
          "seats": 20,
          "source": "OK",
          "dest": "PA"
      },
      {
          "date": "2021-01-31T16:59:38.873Z",
          "due": "3h51m",
          "operator": "Citilink",
          "busId": "GLI70809",
          "price": "36$",
          "seats": 25,
          "source": "WA",
          "dest": "OH"
      },
      {
          "date": "2021-03-09T06:04:22.521Z",
          "due": "5h17m",
          "operator": "Ride SMART",
          "busId": "GLI63567",
          "price": "36$",
          "seats": 32,
          "source": "VA",
          "dest": "FL"
      },
      {
          "date": "2021-03-02T16:36:32.831Z",
          "due": "3h10m",
          "operator": "Ride SMART",
          "busId": "GLI66859",
          "price": "35$",
          "seats": 16,
          "source": "FL",
          "dest": "AK"
      },
      {
          "date": "2021-01-06T16:33:00.979Z",
          "due": "4h34m",
          "operator": "Citilink",
          "busId": "GLI78197",
          "price": "22$",
          "seats": 22,
          "source": "MN",
          "dest": "MT"
      },
      {
          "date": "2021-02-19T21:55:11.621Z",
          "due": "5h12m",
          "operator": "Westcat",
          "busId": "GLI82030",
          "price": "15$",
          "seats": 30,
          "source": "WY",
          "dest": "PA"
      },
      {
          "date": "2021-01-23T23:04:44.940Z",
          "due": "4h37m",
          "operator": "Westcat",
          "busId": "GLI95725",
          "price": "13$",
          "seats": 32,
          "source": "SC",
          "dest": "OR"
      },
      {
          "date": "2021-01-03T00:48:06.134Z",
          "due": "5h45m",
          "operator": "Westcat",
          "busId": "GLI48615",
          "price": "25$",
          "seats": 36,
          "source": "IL",
          "dest": "WI"
      },
      {
          "date": "2021-01-06T16:59:54.969Z",
          "due": "4h44m",
          "operator": "Westcat",
          "busId": "GLI84764",
          "price": "33$",
          "seats": 17,
          "source": "WA",
          "dest": "CT"
      },
      {
          "date": "2021-02-26T23:02:40.902Z",
          "due": "5h55m",
          "operator": "Ride SMART",
          "busId": "GLI40554",
          "price": "19$",
          "seats": 31,
          "source": "WI",
          "dest": "SC"
      },
      {
          "date": "2021-02-17T09:10:20.883Z",
          "due": "5h43m",
          "operator": "Ride SMART",
          "busId": "GLI24423",
          "price": "31$",
          "seats": 27,
          "source": "SD",
          "dest": "TX"
      },
      {
          "date": "2021-01-29T18:20:44.986Z",
          "due": "3h42m",
          "operator": "Westcat",
          "busId": "GLI37205",
          "price": "26$",
          "seats": 36,
          "source": "OK",
          "dest": "AL"
      },
      {
          "date": "2021-01-05T16:03:18.168Z",
          "due": "3h20m",
          "operator": "Westcat",
          "busId": "GLI35399",
          "price": "15$",
          "seats": 32,
          "source": "WA",
          "dest": "ND"
      },
      {
          "date": "2021-02-24T08:56:37.830Z",
          "due": "5h2m",
          "operator": "Ride SMART",
          "busId": "GLI85595",
          "price": "29$",
          "seats": 35,
          "source": "NJ",
          "dest": "OK"
      },
      {
          "date": "2021-01-19T20:59:45.780Z",
          "due": "3h31m",
          "operator": "Ride SMART",
          "busId": "GLI77091",
          "price": "13$",
          "seats": 28,
          "source": "DE",
          "dest": "TX"
      },
      {
          "date": "2021-01-26T14:44:18.193Z",
          "due": "3h52m",
          "operator": "Citilink",
          "busId": "GLI29158",
          "price": "18$",
          "seats": 31,
          "source": "UT",
          "dest": "ND"
      },
      {
          "date": "2021-02-16T15:03:45.100Z",
          "due": "5h26m",
          "operator": "Ride SMART",
          "busId": "GLI34453",
          "price": "35$",
          "seats": 40,
          "source": "CO",
          "dest": "MI"
      },
      {
          "date": "2021-03-08T19:35:37.051Z",
          "due": "5h21m",
          "operator": "Citilink",
          "busId": "GLI46394",
          "price": "28$",
          "seats": 27,
          "source": "SD",
          "dest": "FL"
      },
      {
          "date": "2021-02-15T13:24:18.830Z",
          "due": "4h10m",
          "operator": "Westcat",
          "busId": "GLI27421",
          "price": "16$",
          "seats": 38,
          "source": "MI",
          "dest": "ME"
      },
      {
          "date": "2021-02-27T23:01:33.640Z",
          "due": "3h23m",
          "operator": "Citilink",
          "busId": "GLI70615",
          "price": "15$",
          "seats": 31,
          "source": "MA",
          "dest": "DE"
      },
      {
          "date": "2021-03-12T21:00:19.256Z",
          "due": "5h49m",
          "operator": "Citilink",
          "busId": "GLI69498",
          "price": "24$",
          "seats": 30,
          "source": "ME",
          "dest": "CA"
      },
      {
          "date": "2021-03-07T09:57:11.556Z",
          "due": "5h10m",
          "operator": "Westcat",
          "busId": "GLI37561",
          "price": "28$",
          "seats": 19,
          "source": "ME",
          "dest": "ME"
      },
      {
          "date": "2021-01-18T01:51:15.728Z",
          "due": "4h45m",
          "operator": "Westcat",
          "busId": "GLI66296",
          "price": "31$",
          "seats": 17,
          "source": "NJ",
          "dest": ""
      },
      {
          "date": "2021-01-06T12:59:35.947Z",
          "due": "5h24m",
          "operator": "Ride SMART",
          "busId": "GLI71640",
          "price": "34$",
          "seats": 29,
          "source": "NH",
          "dest": "ND"
      },
      {
          "date": "2021-02-24T23:13:35.610Z",
          "due": "5h40m",
          "operator": "Citilink",
          "busId": "GLI32674",
          "price": "15$",
          "seats": 36,
          "source": "AK",
          "dest": "GA"
      },
      {
          "date": "2021-02-23T06:00:42.233Z",
          "due": "5h21m",
          "operator": "Citilink",
          "busId": "GLI41627",
          "price": "40$",
          "seats": 21,
          "source": "OH",
          "dest": "VT"
      },
      {
          "date": "2021-02-20T22:10:12.493Z",
          "due": "3h25m",
          "operator": "Ride SMART",
          "busId": "GLI88266",
          "price": "10$",
          "seats": 18,
          "source": "OR",
          "dest": "LA"
      },
      {
          "date": "2021-03-04T05:05:42.785Z",
          "due": "5h29m",
          "operator": "Citilink",
          "busId": "GLI73082",
          "price": "26$",
          "seats": 19,
          "source": "AK",
          "dest": "WV"
      },
      {
          "date": "2021-01-21T07:02:45.191Z",
          "due": "3h3m",
          "operator": "Westcat",
          "busId": "GLI85280",
          "price": "13$",
          "seats": 38,
          "source": "ID",
          "dest": "UT"
      },
      {
          "date": "2021-02-21T07:12:19.691Z",
          "due": "5h38m",
          "operator": "Ride SMART",
          "busId": "GLI98836",
          "price": "12$",
          "seats": 39,
          "source": "MN",
          "dest": "MD"
      },
      {
          "date": "2021-03-07T08:41:00.318Z",
          "due": "5h2m",
          "operator": "Westcat",
          "busId": "GLI54150",
          "price": "11$",
          "seats": 38,
          "source": "AR",
          "dest": "HI"
      },
      {
          "date": "2021-01-02T12:45:44.013Z",
          "due": "5h52m",
          "operator": "Citilink",
          "busId": "GLI68396",
          "price": "18$",
          "seats": 34,
          "source": "KY",
          "dest": "AR"
      },
      {
          "date": "2021-03-06T16:55:24.248Z",
          "due": "3h53m",
          "operator": "Westcat",
          "busId": "GLI85063",
          "price": "10$",
          "seats": 35,
          "source": "OR",
          "dest": "KY"
      },
      {
          "date": "2021-01-10T16:45:19.173Z",
          "due": "4h27m",
          "operator": "Ride SMART",
          "busId": "GLI14295",
          "price": "37$",
          "seats": 37,
          "source": "NE",
          "dest": "GA"
      },
      {
          "date": "2021-02-18T20:26:48.016Z",
          "due": "3h28m",
          "operator": "Citilink",
          "busId": "GLI86772",
          "price": "10$",
          "seats": 21,
          "source": "WI",
          "dest": "CT"
      },
      {
          "date": "2021-02-10T14:55:06.414Z",
          "due": "5h42m",
          "operator": "Ride SMART",
          "busId": "GLI37365",
          "price": "38$",
          "seats": 40,
          "source": "OR",
          "dest": "WY"
      },
      {
          "date": "2021-02-25T20:16:27.987Z",
          "due": "4h30m",
          "operator": "Citilink",
          "busId": "GLI47034",
          "price": "27$",
          "seats": 28,
          "source": "NE",
          "dest": "HI"
      },
      {
          "date": "2021-02-24T18:04:19.718Z",
          "due": "3h19m",
          "operator": "Ride SMART",
          "busId": "GLI30460",
          "price": "12$",
          "seats": 30,
          "source": "RI",
          "dest": "GA"
      },
      {
          "date": "2021-03-02T06:32:58.701Z",
          "due": "5h47m",
          "operator": "Citilink",
          "busId": "GLI69001",
          "price": "37$",
          "seats": 19,
          "source": "OR",
          "dest": "SD"
      },
      {
          "date": "2021-02-16T13:17:59.986Z",
          "due": "4h9m",
          "operator": "Ride SMART",
          "busId": "GLI23107",
          "price": "28$",
          "seats": 38,
          "source": "AK",
          "dest": "TN"
      },
      {
          "date": "2021-02-12T06:30:19.400Z",
          "due": "5h52m",
          "operator": "Citilink",
          "busId": "GLI36146",
          "price": "33$",
          "seats": 25,
          "source": "HI",
          "dest": "UT"
      },
      {
          "date": "2021-02-17T04:27:24.047Z",
          "due": "4h20m",
          "operator": "Citilink",
          "busId": "GLI53342",
          "price": "12$",
          "seats": 40,
          "source": "OH",
          "dest": "AK"
      },
      {
          "date": "2021-01-19T10:33:41.374Z",
          "due": "5h45m",
          "operator": "Westcat",
          "busId": "GLI53051",
          "price": "35$",
          "seats": 23,
          "source": "RI",
          "dest": "OH"
      },
      {
          "date": "2021-01-24T20:52:36.215Z",
          "due": "4h24m",
          "operator": "Westcat",
          "busId": "GLI69202",
          "price": "15$",
          "seats": 40,
          "source": "IN",
          "dest": "AK"
      },
      {
          "date": "2021-02-08T03:42:32.663Z",
          "due": "5h47m",
          "operator": "Citilink",
          "busId": "GLI80606",
          "price": "11$",
          "seats": 20,
          "source": "WY",
          "dest": "ME"
      },
      {
          "date": "2021-03-08T14:47:02.591Z",
          "due": "5h14m",
          "operator": "Citilink",
          "busId": "GLI45671",
          "price": "16$",
          "seats": 20,
          "source": "MO",
          "dest": "IA"
      },
      {
          "date": "2021-01-24T07:18:32.133Z",
          "due": "4h56m",
          "operator": "Westcat",
          "busId": "GLI25302",
          "price": "39$",
          "seats": 22,
          "source": "MA",
          "dest": "MI"
      },
      {
          "date": "2021-02-06T08:56:35.088Z",
          "due": "3h30m",
          "operator": "Westcat",
          "busId": "GLI97315",
          "price": "40$",
          "seats": 40,
          "source": "OR",
          "dest": "CA"
      },
      {
          "date": "2021-03-10T01:43:09.038Z",
          "due": "3h20m",
          "operator": "Westcat",
          "busId": "GLI50650",
          "price": "27$",
          "seats": 37,
          "source": "MN",
          "dest": "OH"
      },
      {
          "date": "2021-03-05T10:59:21.844Z",
          "due": "3h17m",
          "operator": "Ride SMART",
          "busId": "GLI78663",
          "price": "14$",
          "seats": 35,
          "source": "GA",
          "dest": "IA"
      },
      {
          "date": "2021-03-14T11:35:05.099Z",
          "due": "4h52m",
          "operator": "Westcat",
          "busId": "GLI47250",
          "price": "12$",
          "seats": 35,
          "source": "ND",
          "dest": "IA"
      },
      {
          "date": "2021-02-25T12:09:17.712Z",
          "due": "4h50m",
          "operator": "Ride SMART",
          "busId": "GLI59593",
          "price": "27$",
          "seats": 29,
          "source": "IN",
          "dest": "FL"
      },
      {
          "date": "2021-02-27T09:23:27.098Z",
          "due": "4h38m",
          "operator": "Ride SMART",
          "busId": "GLI24008",
          "price": "22$",
          "seats": 27,
          "source": "RI",
          "dest": "MO"
      },
      {
          "date": "2021-03-06T14:18:42.572Z",
          "due": "4h3m",
          "operator": "Citilink",
          "busId": "GLI53095",
          "price": "24$",
          "seats": 30,
          "source": "SC",
          "dest": "MT"
      },
      {
          "date": "2021-03-01T18:25:49.892Z",
          "due": "4h46m",
          "operator": "Citilink",
          "busId": "GLI21548",
          "price": "12$",
          "seats": 27,
          "source": "KS",
          "dest": "MA"
      },
      {
          "date": "2021-03-03T00:21:41.628Z",
          "due": "5h19m",
          "operator": "Citilink",
          "busId": "GLI14883",
          "price": "29$",
          "seats": 16,
          "source": "DE",
          "dest": "MD"
      },
      {
          "date": "2021-02-26T03:02:18.247Z",
          "due": "4h32m",
          "operator": "Westcat",
          "busId": "GLI18897",
          "price": "20$",
          "seats": 36,
          "source": "MN",
          "dest": "IL"
      },
      {
          "date": "2021-01-24T17:39:35.693Z",
          "due": "5h4m",
          "operator": "Westcat",
          "busId": "GLI81148",
          "price": "12$",
          "seats": 22,
          "source": "ND",
          "dest": "CT"
      },
      {
          "date": "2021-01-18T04:06:15.921Z",
          "due": "4h5m",
          "operator": "Westcat",
          "busId": "GLI92504",
          "price": "19$",
          "seats": 37,
          "source": "ID",
          "dest": "MS"
      },
      {
          "date": "2021-02-17T15:04:03.612Z",
          "due": "5h33m",
          "operator": "Ride SMART",
          "busId": "GLI17003",
          "price": "13$",
          "seats": 22,
          "source": "UT",
          "dest": "MA"
      },
      {
          "date": "2021-01-07T18:11:20.937Z",
          "due": "4h15m",
          "operator": "Ride SMART",
          "busId": "GLI92810",
          "price": "28$",
          "seats": 20,
          "source": "WI",
          "dest": "DE"
      },
      {
          "date": "2021-02-26T21:37:40.217Z",
          "due": "3h19m",
          "operator": "Ride SMART",
          "busId": "GLI46404",
          "price": "28$",
          "seats": 31,
          "source": "UT",
          "dest": "SD"
      },
      {
          "date": "2021-02-20T04:08:37.759Z",
          "due": "4h8m",
          "operator": "Ride SMART",
          "busId": "GLI77259",
          "price": "35$",
          "seats": 25,
          "source": "VT",
          "dest": "NM"
      },
      {
          "date": "2021-02-17T21:18:10.897Z",
          "due": "4h47m",
          "operator": "Ride SMART",
          "busId": "GLI30813",
          "price": "37$",
          "seats": 37,
          "source": "DE",
          "dest": "MI"
      },
      {
          "date": "2021-02-17T18:39:14.838Z",
          "due": "4h59m",
          "operator": "Westcat",
          "busId": "GLI33903",
          "price": "27$",
          "seats": 16,
          "source": "CT",
          "dest": "NC"
      },
      {
          "date": "2021-02-25T08:24:09.590Z",
          "due": "5h48m",
          "operator": "Ride SMART",
          "busId": "GLI42985",
          "price": "25$",
          "seats": 28,
          "source": "MI",
          "dest": "DE"
      },
      {
          "date": "2021-02-15T19:22:30.993Z",
          "due": "5h30m",
          "operator": "Citilink",
          "busId": "GLI85505",
          "price": "10$",
          "seats": 16,
          "source": "MT",
          "dest": "HI"
      },
      {
          "date": "2021-02-15T23:48:02.622Z",
          "due": "5h36m",
          "operator": "Citilink",
          "busId": "GLI29871",
          "price": "13$",
          "seats": 18,
          "source": "MS",
          "dest": "TN"
      },
      {
          "date": "2021-01-29T10:58:32.213Z",
          "due": "4h21m",
          "operator": "Ride SMART",
          "busId": "GLI70614",
          "price": "39$",
          "seats": 39,
          "source": "SD",
          "dest": "MN"
      },
      {
          "date": "2021-01-25T18:19:00.627Z",
          "due": "5h44m",
          "operator": "Westcat",
          "busId": "GLI52963",
          "price": "26$",
          "seats": 29,
          "source": "OH",
          "dest": "TN"
      },
      {
          "date": "2021-01-24T19:17:02.333Z",
          "due": "3h7m",
          "operator": "Citilink",
          "busId": "GLI25151",
          "price": "30$",
          "seats": 21,
          "source": "DE",
          "dest": "NY"
      },
      {
          "date": "2021-01-31T03:39:05.552Z",
          "due": "3h48m",
          "operator": "Citilink",
          "busId": "GLI17311",
          "price": "39$",
          "seats": 15,
          "source": "MI",
          "dest": "MS"
      },
      {
          "date": "2021-01-08T10:00:11.814Z",
          "due": "4h25m",
          "operator": "Ride SMART",
          "busId": "GLI17425",
          "price": "10$",
          "seats": 33,
          "source": "OH",
          "dest": "OH"
      },
      {
          "date": "2021-01-06T19:38:50.442Z",
          "due": "4h18m",
          "operator": "Citilink",
          "busId": "GLI70637",
          "price": "27$",
          "seats": 28,
          "source": "KS",
          "dest": "NJ"
      },
      {
          "date": "2021-02-28T11:10:40.923Z",
          "due": "4h54m",
          "operator": "Ride SMART",
          "busId": "GLI78909",
          "price": "31$",
          "seats": 35,
          "source": "NY",
          "dest": "SC"
      },
      {
          "date": "2021-01-07T09:17:03.051Z",
          "due": "4h15m",
          "operator": "Citilink",
          "busId": "GLI63894",
          "price": "17$",
          "seats": 28,
          "source": "IL",
          "dest": "NC"
      },
      {
          "date": "2021-02-25T03:27:07.943Z",
          "due": "3h36m",
          "operator": "Westcat",
          "busId": "GLI23694",
          "price": "18$",
          "seats": 23,
          "source": "OK",
          "dest": "CA"
      },
      {
          "date": "2021-01-22T20:29:07.596Z",
          "due": "4h47m",
          "operator": "Ride SMART",
          "busId": "GLI91614",
          "price": "34$",
          "seats": 24,
          "source": "MA",
          "dest": "ND"
      },
      {
          "date": "2021-03-10T21:31:55.756Z",
          "due": "5h54m",
          "operator": "Westcat",
          "busId": "GLI58223",
          "price": "11$",
          "seats": 36,
          "source": "SD",
          "dest": "KS"
      },
      {
          "date": "2021-02-27T07:48:03.558Z",
          "due": "3h22m",
          "operator": "Citilink",
          "busId": "GLI78339",
          "price": "40$",
          "seats": 34,
          "source": "ME",
          "dest": "VA"
      },
      {
          "date": "2021-03-11T08:23:31.182Z",
          "due": "4h13m",
          "operator": "Citilink",
          "busId": "GLI43780",
          "price": "18$",
          "seats": 31,
          "source": "MT",
          "dest": "VT"
      },
      {
          "date": "2021-02-04T07:13:46.342Z",
          "due": "3h33m",
          "operator": "Westcat",
          "busId": "GLI42841",
          "price": "28$",
          "seats": 35,
          "source": "SC",
          "dest": "IL"
      },
      {
          "date": "2021-01-25T22:30:35.841Z",
          "due": "4h27m",
          "operator": "Ride SMART",
          "busId": "GLI41093",
          "price": "10$",
          "seats": 32,
          "source": "OK",
          "dest": "MS"
      },
      {
          "date": "2021-03-04T13:30:38.081Z",
          "due": "3h17m",
          "operator": "Citilink",
          "busId": "GLI16059",
          "price": "16$",
          "seats": 23,
          "source": "MT",
          "dest": "CO"
      },
      {
          "date": "2021-02-26T04:10:03.539Z",
          "due": "3h48m",
          "operator": "Westcat",
          "busId": "GLI82915",
          "price": "14$",
          "seats": 33,
          "source": "WA",
          "dest": "OK"
      },
      {
          "date": "2021-01-18T21:53:57.234Z",
          "due": "5h7m",
          "operator": "Westcat",
          "busId": "GLI41372",
          "price": "38$",
          "seats": 25,
          "source": "SD",
          "dest": "KS"
      },
      {
          "date": "2021-02-13T00:08:30.676Z",
          "due": "4h29m",
          "operator": "Citilink",
          "busId": "GLI88655",
          "price": "31$",
          "seats": 38,
          "source": "FL",
          "dest": "RI"
      },
      {
          "date": "2021-03-08T08:33:53.750Z",
          "due": "4h22m",
          "operator": "Westcat",
          "busId": "GLI19132",
          "price": "20$",
          "seats": 26,
          "source": "DE",
          "dest": "VA"
      },
      {
          "date": "2021-01-27T08:20:21.077Z",
          "due": "4h43m",
          "operator": "Westcat",
          "busId": "GLI98985",
          "price": "32$",
          "seats": 27,
          "source": "MS",
          "dest": "KS"
      },
      {
          "date": "2021-01-20T01:13:31.345Z",
          "due": "3h5m",
          "operator": "Citilink",
          "busId": "GLI75557",
          "price": "31$",
          "seats": 30,
          "source": "MT",
          "dest": "MO"
      },
      {
          "date": "2021-03-08T10:05:44.939Z",
          "due": "3h47m",
          "operator": "Ride SMART",
          "busId": "GLI60685",
          "price": "11$",
          "seats": 38,
          "source": "NV",
          "dest": "OR"
      },
      {
          "date": "2021-03-06T22:16:00.424Z",
          "due": "3h9m",
          "operator": "Ride SMART",
          "busId": "GLI65290",
          "price": "33$",
          "seats": 40,
          "source": "NY",
          "dest": "VA"
      },
      {
          "date": "2021-02-20T13:36:59.985Z",
          "due": "5h55m",
          "operator": "Citilink",
          "busId": "GLI83324",
          "price": "14$",
          "seats": 38,
          "source": "WY",
          "dest": "OK"
      },
      {
          "date": "2021-01-26T04:56:04.655Z",
          "due": "5h18m",
          "operator": "Westcat",
          "busId": "GLI23292",
          "price": "17$",
          "seats": 21,
          "source": "AL",
          "dest": "PA"
      },
      {
          "date": "2021-03-03T14:16:01.926Z",
          "due": "4h57m",
          "operator": "Citilink",
          "busId": "GLI79307",
          "price": "31$",
          "seats": 21,
          "source": "AL",
          "dest": "TN"
      },
      {
          "date": "2021-01-22T01:48:05.954Z",
          "due": "4h34m",
          "operator": "Citilink",
          "busId": "GLI74549",
          "price": "22$",
          "seats": 26,
          "source": "AZ",
          "dest": "WA"
      },
      {
          "date": "2021-02-23T19:48:49.109Z",
          "due": "5h12m",
          "operator": "Ride SMART",
          "busId": "GLI64277",
          "price": "19$",
          "seats": 33,
          "dest": "PA"
      },
      {
          "date": "2021-01-14T02:47:44.391Z",
          "due": "3h23m",
          "operator": "Ride SMART",
          "busId": "GLI13455",
          "price": "27$",
          "seats": 24,
          "source": "NE",
          "dest": "NC"
      },
      {
          "date": "2021-02-28T21:17:19.896Z",
          "due": "3h20m",
          "operator": "Ride SMART",
          "busId": "GLI79773",
          "price": "37$",
          "seats": 35,
          "source": "VA",
          "dest": "DE"
      },
      {
          "date": "2021-01-07T22:40:53.224Z",
          "due": "4h4m",
          "operator": "Westcat",
          "busId": "GLI85854",
          "price": "24$",
          "seats": 35,
          "source": "VT",
          "dest": "CO"
      },
      {
          "date": "2021-02-26T05:18:06.713Z",
          "due": "3h3m",
          "operator": "Westcat",
          "busId": "GLI79125",
          "price": "39$",
          "seats": 26,
          "source": "MT",
          "dest": "IA"
      },
      {
          "date": "2021-03-02T17:38:45.730Z",
          "due": "5h39m",
          "operator": "Ride SMART",
          "busId": "GLI48672",
          "price": "37$",
          "seats": 28,
          "source": "WY",
          "dest": "NY"
      },
      {
          "date": "2021-01-31T05:22:59.527Z",
          "due": "5h26m",
          "operator": "Westcat",
          "busId": "GLI43594",
          "price": "19$",
          "seats": 16,
          "source": "ND",
          "dest": "MA"
      },
      {
          "date": "2021-01-09T11:11:01.747Z",
          "due": "5h59m",
          "operator": "Westcat",
          "busId": "GLI33405",
          "price": "23$",
          "seats": 38,
          "source": "RI",
          "dest": "GA"
      },
      {
          "date": "2021-01-27T08:15:37.675Z",
          "due": "5h39m",
          "operator": "Ride SMART",
          "busId": "GLI90790",
          "price": "38$",
          "seats": 15,
          "source": "NV",
          "dest": "WY"
      },
      {
          "date": "2021-01-04T10:22:34.061Z",
          "due": "4h43m",
          "operator": "Ride SMART",
          "busId": "GLI39961",
          "price": "17$",
          "seats": 37,
          "source": "MA",
          "dest": "KS"
      },
      {
          "date": "2021-02-27T13:54:36.192Z",
          "due": "3h48m",
          "operator": "Westcat",
          "busId": "GLI77348",
          "price": "14$",
          "seats": 31,
          "source": "DE",
          "dest": "TX"
      },
      {
          "date": "2021-01-09T03:31:24.443Z",
          "due": "5h32m",
          "operator": "Ride SMART",
          "busId": "GLI89596",
          "price": "16$",
          "seats": 34,
          "source": "SC",
          "dest": "WV"
      },
      {
          "date": "2021-02-23T18:29:47.919Z",
          "due": "4h54m",
          "operator": "Citilink",
          "busId": "GLI52103",
          "price": "15$",
          "seats": 35,
          "source": "FL",
          "dest": "CA"
      },
      {
          "date": "2021-03-06T15:07:13.454Z",
          "due": "3h42m",
          "operator": "Westcat",
          "busId": "GLI56233",
          "price": "12$",
          "seats": 30,
          "source": "MO",
          "dest": "IN"
      },
      {
          "date": "2021-02-26T15:42:26.692Z",
          "due": "4h39m",
          "operator": "Westcat",
          "busId": "GLI26551",
          "price": "10$",
          "seats": 31,
          "source": "LA",
          "dest": "MS"
      },
      {
          "date": "2021-02-10T15:59:04.939Z",
          "due": "4h55m",
          "operator": "Ride SMART",
          "busId": "GLI28070",
          "price": "22$",
          "seats": 39,
          "source": "CA",
          "dest": "SC"
      },
      {
          "date": "2021-03-12T15:35:20.415Z",
          "due": "3h46m",
          "operator": "Citilink",
          "busId": "GLI60931",
          "price": "17$",
          "seats": 26,
          "source": "WA",
          "dest": "MT"
      },
      {
          "date": "2021-01-30T12:14:05.257Z",
          "due": "5h41m",
          "operator": "Westcat",
          "busId": "GLI50891",
          "price": "35$",
          "seats": 28,
          "source": "KS",
          "dest": "SD"
      },
      {
          "date": "2021-01-25T02:34:49.633Z",
          "due": "3h52m",
          "operator": "Westcat",
          "busId": "GLI87932",
          "price": "19$",
          "seats": 28,
          "source": "SC",
          "dest": "OK"
      },
      {
          "date": "2021-01-22T01:55:42.830Z",
          "due": "4h38m",
          "operator": "Ride SMART",
          "busId": "GLI77945",
          "price": "32$",
          "seats": 22,
          "source": "ID",
          "dest": "ND"
      },
      {
          "date": "2021-01-31T17:51:28.325Z",
          "due": "3h28m",
          "operator": "Ride SMART",
          "busId": "GLI88004",
          "price": "28$",
          "seats": 39,
          "source": "UT",
          "dest": "KY"
      },
      {
          "date": "2021-02-23T18:19:49.180Z",
          "due": "4h36m",
          "operator": "Westcat",
          "busId": "GLI43751",
          "price": "28$",
          "seats": 21,
          "source": "IN",
          "dest": "KS"
      },
      {
          "date": "2021-02-03T08:23:14.612Z",
          "due": "3h43m",
          "operator": "Ride SMART",
          "busId": "GLI36058",
          "price": "34$",
          "seats": 16,
          "source": "DE",
          "dest": "WI"
      },
      {
          "date": "2021-01-28T06:15:41.757Z",
          "due": "4h16m",
          "operator": "Ride SMART",
          "busId": "GLI30970",
          "price": "19$",
          "seats": 25,
          "source": "FL",
          "dest": "LA"
      },
      {
          "date": "2021-01-09T07:00:41.138Z",
          "due": "3h34m",
          "operator": "Citilink",
          "busId": "GLI90344",
          "price": "28$",
          "seats": 28,
          "source": "NY",
          "dest": "IL"
      },
      {
          "date": "2021-01-07T13:35:29.792Z",
          "due": "4h48m",
          "operator": "Ride SMART",
          "busId": "GLI87683",
          "price": "19$",
          "seats": 40,
          "source": "AK",
          "dest": "NC"
      },
      {
          "date": "2021-02-19T05:24:02.399Z",
          "due": "3h51m",
          "operator": "Ride SMART",
          "busId": "GLI77996",
          "price": "11$",
          "seats": 28,
          "source": "CT",
          "dest": "WV"
      },
      {
          "date": "2021-01-22T16:38:07.938Z",
          "due": "5h33m",
          "operator": "Westcat",
          "busId": "GLI70545",
          "price": "15$",
          "seats": 29,
          "source": "ME",
          "dest": "MN"
      },
      {
          "date": "2021-01-11T00:48:57.322Z",
          "due": "3h18m",
          "operator": "Ride SMART",
          "busId": "GLI82183",
          "price": "10$",
          "seats": 20,
          "source": "HI",
          "dest": "SC"
      },
      {
          "date": "2021-01-25T10:26:55.719Z",
          "due": "4h59m",
          "operator": "Citilink",
          "busId": "GLI73710",
          "price": "22$",
          "seats": 34,
          "source": "AL",
          "dest": "WA"
      },
      {
          "date": "2021-03-12T17:21:24.983Z",
          "due": "3h40m",
          "operator": "Ride SMART",
          "busId": "GLI69179",
          "price": "35$",
          "seats": 16,
          "source": "NC",
          "dest":""
      },
      {
          "date": "2021-02-06T15:27:36.957Z",
          "due": "5h48m",
          "operator": "Ride SMART",
          "busId": "GLI91429",
          "price": "25$",
          "seats": 15,
          "source": "GA",
          "dest": "HI"
      },
      {
          "date": "2021-01-28T03:51:01.964Z",
          "due": "5h4m",
          "operator": "Westcat",
          "busId": "GLI32942",
          "price": "36$",
          "seats": 17,
          "source": "MT",
          "dest": "CO"
      },
      {
          "date": "2021-01-22T03:23:43.219Z",
          "due": "5h59m",
          "operator": "Westcat",
          "busId": "GLI36354",
          "price": "40$",
          "seats": 26,
          "source": "ND",
          "dest": "DE"
      },
      {
          "date": "2021-01-08T16:28:44.957Z",
          "due": "3h17m",
          "operator": "Citilink",
          "busId": "GLI25814",
          "price": "27$",
          "seats": 20,
          "source": "PA",
          "dest": "HI"
      },
      {
          "date": "2021-03-01T09:43:33.003Z",
          "due": "5h26m",
          "operator": "Citilink",
          "busId": "GLI74039",
          "price": "29$",
          "seats": 18,
          "source": "MN",
          "dest": "MD"
      },
      {
          "date": "2021-03-08T13:54:56.743Z",
          "due": "4h2m",
          "operator": "Ride SMART",
          "busId": "GLI88614",
          "price": "38$",
          "seats": 32,
          "source": "NH",
          "dest": "NC"
      },
      {
          "date": "2021-02-10T20:41:06.003Z",
          "due": "5h39m",
          "operator": "Westcat",
          "busId": "GLI27131",
          "price": "15$",
          "seats": 15,
          "source": "AZ",
          "dest": "HI"
      },
      {
          "date": "2021-01-13T06:23:42.310Z",
          "due": "5h41m",
          "operator": "Citilink",
          "busId": "GLI14758",
          "price": "34$",
          "seats": 38,
          "source": "ID",
          "dest": "NE"
      },
      {
          "date": "2021-02-26T16:49:50.663Z",
          "due": "3h45m",
          "operator": "Citilink",
          "busId": "GLI23520",
          "price": "26$",
          "seats": 18,
          "source": "IL"
      },
      {
          "date": "2021-01-04T23:42:08.582Z",
          "due": "5h49m",
          "operator": "Ride SMART",
          "busId": "GLI62055",
          "price": "29$",
          "seats": 19,
          "source": "UT",
          "dest": "MD"
      },
      {
          "date": "2021-02-13T01:48:28.462Z",
          "due": "3h5m",
          "operator": "Ride SMART",
          "busId": "GLI76768",
          "price": "20$",
          "seats": 21,
          "source": "NJ",
          "dest": "IN"
      },
      {
          "date": "2021-01-13T11:51:29.076Z",
          "due": "3h45m",
          "operator": "Ride SMART",
          "busId": "GLI33364",
          "price": "13$",
          "seats": 23,
          "source": "MD",
          "dest": "NC"
      },
      {
          "date": "2021-02-04T16:28:22.630Z",
          "due": "4h43m",
          "operator": "Citilink",
          "busId": "GLI64771",
          "price": "19$",
          "seats": 27,
          "source": "WV",
          "dest": "NM"
      },
      {
          "date": "2021-02-11T19:26:46.419Z",
          "due": "5h16m",
          "operator": "Westcat",
          "busId": "GLI83463",
          "price": "17$",
          "seats": 31,
          "source": "VA",
          "dest": "MS"
      },
      {
          "date": "2021-02-05T02:08:32.401Z",
          "due": "3h32m",
          "operator": "Citilink",
          "busId": "GLI92913",
          "price": "30$",
          "seats": 16,
          "source": "NJ",
          "dest": "AK"
      },
      {
          "date": "2021-03-03T00:54:35.572Z",
          "due": "4h25m",
          "operator": "Citilink",
          "busId": "GLI40676",
          "price": "16$",
          "seats": 38,
          "source": "HI",
          "dest": "MA"
      },
      {
          "date": "2021-02-02T14:16:40.605Z",
          "due": "4h11m",
          "operator": "Ride SMART",
          "busId": "GLI64172",
          "price": "39$",
          "seats": 15,
          "source": "OK",
          "dest": "MI"
      },
      {
          "date": "2021-02-06T09:42:10.550Z",
          "due": "5h34m",
          "operator": "Citilink",
          "busId": "GLI73481",
          "price": "27$",
          "seats": 27,
          "source": "MI",
          "dest": "UT"
      },
      {
          "date": "2021-03-01T08:47:41.895Z",
          "due": "3h39m",
          "operator": "Citilink",
          "busId": "GLI77937",
          "price": "17$",
          "seats": 19,
          "source": "RI",
          "dest": "OR"
      },
      {
          "date": "2021-02-18T07:22:14.321Z",
          "due": "3h28m",
          "operator": "Westcat",
          "busId": "GLI49689",
          "price": "34$",
          "seats": 23,
          "source": "VT",
          "dest": "MO"
      },
      {
          "date": "2021-02-16T18:59:10.882Z",
          "due": "3h32m",
          "operator": "Westcat",
          "busId": "GLI45246",
          "price": "40$",
          "seats": 28,
          "source": "IA",
          "dest": "AK"
      },
      {
          "date": "2021-02-27T16:01:02.563Z",
          "due": "4h33m",
          "operator": "Ride SMART",
          "busId": "GLI59288",
          "price": "33$",
          "seats": 37,
          "source": "GA",
          "dest": "IL"
      },
      {
          "date": "2021-02-09T04:36:42.539Z",
          "due": "5h37m",
          "operator": "Ride SMART",
          "busId": "GLI93851",
          "price": "35$",
          "seats": 37,
          "source": "PA",
          "dest": "SD"
      },
      {
          "date": "2021-02-06T17:42:19.715Z",
          "due": "3h3m",
          "operator": "Westcat",
          "busId": "GLI96509",
          "price": "34$",
          "seats": 16,
          "source": "MT",
          "dest": "MN"
      },
      {
          "date": "2021-02-19T12:46:50.239Z",
          "due": "3h21m",
          "operator": "Citilink",
          "busId": "GLI37580",
          "price": "17$",
          "seats": 37,
          "source": "IN",
          "dest": "MS"
      },
      {
          "date": "2021-03-09T00:07:14.935Z",
          "due": "5h57m",
          "operator": "Westcat",
          "busId": "GLI88367",
          "price": "19$",
          "seats": 22,
          "source": "IA",
          "dest": "LA"
      },
      {
          "date": "2021-02-14T13:28:58.338Z",
          "due": "5h4m",
          "operator": "Westcat",
          "busId": "GLI14663",
          "price": "39$",
          "seats": 31,
          "source": "KS",
          "dest": "CA"
      },
      {
          "date": "2021-01-25T07:33:18.727Z",
          "due": "4h38m",
          "operator": "Citilink",
          "busId": "GLI27263",
          "price": "30$",
          "seats": 18,
          "source": "RI",
          "dest": "UT"
      },
      {
          "date": "2021-03-11T09:43:58.687Z",
          "due": "5h34m",
          "operator": "Westcat",
          "busId": "GLI46704",
          "price": "26$",
          "seats": 39,
          "source": "IA",
          "dest": "RI"
      },
      {
          "date": "2021-03-07T04:51:57.148Z",
          "due": "4h22m",
          "operator": "Citilink",
          "busId": "GLI92719",
          "price": "27$",
          "seats": 38,
          "source": "NE",
          "dest": "VA"
      },
      {
          "date": "2021-03-13T00:48:36.125Z",
          "due": "4h24m",
          "operator": "Ride SMART",
          "busId": "GLI55480",
          "price": "25$",
          "seats": 40,
          "source": "AL",
          "dest": "NE"
      },
      {
          "date": "2021-03-07T19:01:32.868Z",
          "due": "5h15m",
          "operator": "Westcat",
          "busId": "GLI61519",
          "price": "20$",
          "seats": 15,
          "source": "MI",
          "dest": "RI"
      },
      {
          "date": "2021-01-01T12:20:38.009Z",
          "due": "4h12m",
          "operator": "Westcat",
          "busId": "GLI77095",
          "price": "34$",
          "seats": 37,
          "source": "MD",
          "dest": "AL"
      },
      {
          "date": "2021-03-13T03:45:09.306Z",
          "due": "4h10m",
          "operator": "Citilink",
          "busId": "GLI52309",
          "price": "33$",
          "seats": 32,
          "source": "NE",
          "dest": "ME"
      },
      {
          "date": "2021-02-22T16:02:01.248Z",
          "due": "4h21m",
          "operator": "Westcat",
          "busId": "GLI75262",
          "price": "32$",
          "seats": 24,
          "source": "AR",
          "dest": "AL"
      },
      {
          "date": "2021-03-05T18:57:59.552Z",
          "due": "5h42m",
          "operator": "Citilink",
          "busId": "GLI93349",
          "price": "24$",
          "seats": 19,
          "source": "IN",
          "dest": "NV"
      },
      {
          "date": "2021-01-18T12:16:38.680Z",
          "due": "5h45m",
          "operator": "Ride SMART",
          "busId": "GLI50415",
          "price": "33$",
          "seats": 31,
          "source": "NE",
          "dest": "TN"
      },
      {
          "date": "2021-03-13T23:48:55.408Z",
          "due": "4h54m",
          "operator": "Citilink",
          "busId": "GLI90897",
          "price": "26$",
          "seats": 17,
          "source": "KS",
          "dest": "CA"
      },
      {
          "date": "2021-01-12T01:50:11.733Z",
          "due": "4h12m",
          "operator": "Ride SMART",
          "busId": "GLI86131",
          "price": "29$",
          "seats": 27,
          "source": "NC",
          "dest": "KY"
      },
      {
          "date": "2021-01-15T05:58:59.467Z",
          "due": "5h58m",
          "operator": "Ride SMART",
          "busId": "GLI98726",
          "price": "32$",
          "seats": 28,
          "source": "CO",
          "dest": "MT"
      },
      {
          "date": "2021-01-14T16:05:40.820Z",
          "due": "4h58m",
          "operator": "Westcat",
          "busId": "GLI85037",
          "price": "39$",
          "seats": 19,
          "source": "CT",
          "dest": "MN"
      },
      {
          "date": "2021-01-08T23:42:18.920Z",
          "due": "4h11m",
          "operator": "Westcat",
          "busId": "GLI70851",
          "price": "14$",
          "seats": 20,
          "source": "MO",
          "dest": "IL"
      },
      {
          "date": "2021-01-16T16:00:17.700Z",
          "due": "4h13m",
          "operator": "Westcat",
          "busId": "GLI80205",
          "price": "17$",
          "seats": 16,
          "source": "MD",
          "dest": "ND"
      },
      {
          "date": "2021-01-27T09:48:32.315Z",
          "due": "5h35m",
          "operator": "Ride SMART",
          "busId": "GLI31124",
          "price": "19$",
          "seats": 15,
          "source": "DE",
          "dest": "GA"
      },
      {
          "date": "2021-01-18T22:10:17.537Z",
          "due": "5h51m",
          "operator": "Citilink",
          "busId": "GLI96117",
          "price": "29$",
          "seats": 19,
          "source": "ME",
          "dest": "NJ"
      },
      {
          "date": "2021-01-03T00:31:08.327Z",
          "due": "4h24m",
          "operator": "Citilink",
          "busId": "GLI37666",
          "price": "30$",
          "seats": 20,
          "source": "NE",
          "dest": "WV"
      },
      {
          "date": "2021-01-15T05:08:38.108Z",
          "due": "4h4m",
          "operator": "Citilink",
          "busId": "GLI67907",
          "price": "24$",
          "seats": 28,
          "source": "MI",
          "dest": "UT"
      },
      {
          "date": "2021-02-18T13:57:42.994Z",
          "due": "4h57m",
          "operator": "Ride SMART",
          "busId": "GLI41767",
          "price": "11$",
          "seats": 21,
          "source": "FL",
          "dest": "WI"
      },
      {
          "date": "2021-03-06T10:48:47.030Z",
          "due": "5h3m",
          "operator": "Citilink",
          "busId": "GLI99056",
          "price": "15$",
          "seats": 26,
          "source": "SD",
          "dest": "NE"
      },
      {
          "date": "2021-02-24T18:05:58.277Z",
          "due": "4h46m",
          "operator": "Ride SMART",
          "busId": "GLI27210",
          "price": "27$",
          "seats": 29,
          "source": "LA",
          "dest": "HI"
      },
      {
          "date": "2021-01-12T04:13:23.914Z",
          "due": "3h18m",
          "operator": "Ride SMART",
          "busId": "GLI18527",
          "price": "15$",
          "seats": 18,
          "source": "VT",
          "dest": "DE"
      },
      {
          "date": "2021-02-08T01:36:35.904Z",
          "due": "5h27m",
          "operator": "Citilink",
          "busId": "GLI39667",
          "price": "34$",
          "seats": 34,
          "source": "AK",
          "dest": "MN"
      },
      {
          "date": "2021-02-18T13:24:24.323Z",
          "due": "3h23m",
          "operator": "Ride SMART",
          "busId": "GLI75505",
          "price": "10$",
          "seats": 28,
          "source": "AK",
          "dest": "AZ"
      },
      {
          "date": "2021-03-06T15:50:40.992Z",
          "due": "4h36m",
          "operator": "Westcat",
          "busId": "GLI94501",
          "price": "18$",
          "seats": 20,
          "source": "AR",
          "dest": "DE"
      },
      {
          "date": "2021-01-08T13:52:04.668Z",
          "due": "4h6m",
          "operator": "Citilink",
          "busId": "GLI25778",
          "price": "39$",
          "seats": 38,
          "source": "ND",
          "dest": "WI"
      },
      {
          "date": "2021-01-17T02:26:16.189Z",
          "due": "5h38m",
          "operator": "Westcat",
          "busId": "GLI49635",
          "price": "27$",
          "seats": 19,
          "source": "KY",
          "dest": "MA"
      },
      {
          "date": "2021-01-18T01:03:49.695Z",
          "due": "4h26m",
          "operator": "Ride SMART",
          "busId": "GLI41413",
          "price": "17$",
          "seats": 40,
          "source": "FL",
          "dest": "CA"
      },
      {
          "date": "2021-01-02T08:43:26.472Z",
          "due": "5h58m",
          "operator": "Ride SMART",
          "busId": "GLI13608",
          "price": "30$",
          "seats": 33,
          "source": "KS",
          "dest": "MT"
      },
      {
          "date": "2021-03-04T19:49:04.624Z",
          "due": "3h30m",
          "operator": "Westcat",
          "busId": "GLI87820",
          "price": "29$",
          "seats": 19,
          "source": "WA",
          "dest": "DE"
      },
      {
          "date": "2021-02-22T14:45:55.905Z",
          "due": "4h25m",
          "operator": "Ride SMART",
          "busId": "GLI12006",
          "price": "30$",
          "seats": 17,
          "source": "CA",
          "dest": "PA"
      },
      {
          "date": "2021-01-10T22:10:48.995Z",
          "due": "5h19m",
          "operator": "Westcat",
          "busId": "GLI51406",
          "price": "32$",
          "seats": 20,
          "source": "SC",
          "dest": "WI"
      },
      {
          "date": "2021-02-18T12:28:27.748Z",
          "due": "4h9m",
          "operator": "Citilink",
          "busId": "GLI38350",
          "price": "11$",
          "seats": 36,
          "source": "LA",
          "dest": "AK"
      },
      {
          "date": "2021-02-16T23:39:36.948Z",
          "due": "5h9m",
          "operator": "Westcat",
          "busId": "GLI13645",
          "price": "29$",
          "seats": 29,
          "source": "OH",
          "dest": "KY"
      },
      {
          "date": "2021-03-03T10:07:18.497Z",
          "due": "3h34m",
          "operator": "Citilink",
          "busId": "GLI34049",
          "price": "25$",
          "seats": 26,
          "source": "IN",
          "dest": "VT"
      },
      {
          "date": "2021-01-11T11:47:24.442Z",
          "due": "3h24m",
          "operator": "Westcat",
          "busId": "GLI27607",
          "price": "39$",
          "seats": 33,
          "source": "KS",
          "dest": "NV"
      },
      {
          "date": "2021-01-11T22:42:46.949Z",
          "due": "5h13m",
          "operator": "Citilink",
          "busId": "GLI32826",
          "price": "35$",
          "seats": 18,
          "source": "MT",
          "dest": "KS"
      },
      {
          "date": "2021-03-09T19:46:12.256Z",
          "due": "5h29m",
          "operator": "Westcat",
          "busId": "GLI88404",
          "price": "18$",
          "seats": 15,
          "source": "KY",
          "dest": "VT"
      },
      {
          "date": "2021-03-03T19:23:17.211Z",
          "due": "3h26m",
          "operator": "Ride SMART",
          "busId": "GLI51601",
          "price": "30$",
          "seats": 16,
          "source": "KS",
          "dest":""
      },
      {
          "date": "2021-02-17T14:08:24.648Z",
          "due": "5h44m",
          "operator": "Westcat",
          "busId": "GLI52202",
          "price": "18$",
          "seats": 18,
          "source": "ME",
          "dest": "NJ"
      },
      {
          "date": "2021-02-18T10:46:02.489Z",
          "due": "3h30m",
          "operator": "Westcat",
          "busId": "GLI38664",
          "price": "38$",
          "seats": 40,
          "source": "CT",
          "dest": "AZ"
      },
      {
          "date": "2021-03-04T21:51:07.817Z",
          "due": "3h32m",
          "operator": "Westcat",
          "busId": "GLI19915",
          "price": "25$",
          "seats": 28,
          "source": "WY",
          "dest": "NE"
      },
      {
          "date": "2021-02-05T12:49:37.770Z",
          "due": "4h31m",
          "operator": "Westcat",
          "busId": "GLI95765",
          "price": "23$",
          "seats": 31,
          "source": "NH",
          "dest": "IL"
      },
      {
          "date": "2021-03-14T13:52:17.940Z",
          "due": "3h41m",
          "operator": "Westcat",
          "busId": "GLI13534",
          "price": "38$",
          "seats": 18,
          "source": "CA",
          "dest": "AL"
      },
      {
          "date": "2021-01-03T12:19:20.885Z",
          "due": "3h11m",
          "operator": "Ride SMART",
          "busId": "GLI28506",
          "price": "17$",
          "seats": 16,
          "source": "TX",
          "dest": "PA"
      },
      {
          "date": "2021-02-21T05:41:02.678Z",
          "due": "5h56m",
          "operator": "Citilink",
          "busId": "GLI22865",
          "price": "37$",
          "seats": 15,
          "source": "AZ",
          "dest": "MI"
      },
      {
          "date": "2021-01-22T22:17:19.491Z",
          "due": "3h46m",
          "operator": "Ride SMART",
          "busId": "GLI32615",
          "price": "31$",
          "seats": 36,
          "source": "SD",
          "dest": "NM"
      },
      {
          "date": "2021-03-12T15:11:39.734Z",
          "due": "4h12m",
          "operator": "Westcat",
          "busId": "GLI52884",
          "price": "21$",
          "seats": 18,
          "source": "WA",
          "dest": "NE"
      },
      {
          "date": "2021-03-08T08:28:32.329Z",
          "due": "3h30m",
          "operator": "Ride SMART",
          "busId": "GLI62759",
          "price": "31$",
          "seats": 27,
          "source": "RI",
          "dest":""
      },
      {
          "date": "2021-02-25T05:41:41.305Z",
          "due": "5h38m",
          "operator": "Citilink",
          "busId": "GLI45907",
          "price": "14$",
          "seats": 40,
          "source": "VA",
          "dest": "AK"
      },
      {
          "date": "2021-03-10T10:30:26.345Z",
          "due": "5h28m",
          "operator": "Citilink",
          "busId": "GLI12083",
          "price": "23$",
          "seats": 25,
          "source": "WA",
          "dest": "MS"
      },
      {
          "date": "2021-02-10T13:54:52.695Z",
          "due": "5h47m",
          "operator": "Westcat",
          "busId": "GLI54522",
          "price": "30$",
          "seats": 20,
          "source": "PA",
          "dest": "WV"
      },
      {
          "date": "2021-01-23T19:25:46.668Z",
          "due": "3h42m",
          "operator": "Westcat",
          "busId": "GLI95618",
          "price": "20$",
          "seats": 32,
          "source": "WA",
          "dest": "LA"
      },
      {
          "date": "2021-02-02T21:45:15.259Z",
          "due": "4h42m",
          "operator": "Ride SMART",
          "busId": "GLI63461",
          "price": "37$",
          "seats": 17,
          "source": "WI",
          "dest": "MN"
      },
      {
          "date": "2021-02-22T00:10:19.072Z",
          "due": "4h34m",
          "operator": "Ride SMART",
          "busId": "GLI94701",
          "price": "11$",
          "seats": 25,
          "source": "VT",
          "dest": "NM"
      },
      {
          "date": "2021-03-13T07:52:16.242Z",
          "due": "3h35m",
          "operator": "Ride SMART",
          "busId": "GLI73414",
          "price": "40$",
          "seats": 33,
          "source": "SC",
          "dest": "PA"
      },
      {
          "date": "2021-01-18T05:56:17.194Z",
          "due": "4h47m",
          "operator": "Ride SMART",
          "busId": "GLI61902",
          "price": "24$",
          "seats": 39,
          "source": "NJ",
          "dest": "PA"
      },
      {
          "date": "2021-01-19T04:46:33.532Z",
          "due": "4h56m",
          "operator": "Ride SMART",
          "busId": "GLI66784",
          "price": "25$",
          "seats": 26,
          "source": "ID",
          "dest": "WI"
      },
      {
          "date": "2021-02-03T09:58:14.034Z",
          "due": "4h59m",
          "operator": "Citilink",
          "busId": "GLI28958",
          "price": "29$",
          "seats": 25,
          "source": "WI",
          "dest": "AL"
      },
      {
          "date": "2021-02-15T09:38:42.919Z",
          "due": "4h48m",
          "operator": "Ride SMART",
          "busId": "GLI38837",
          "price": "18$",
          "seats": 17,
          "source": "AR",
          "dest": "SC"
      },
      {
          "date": "2021-03-04T03:47:26.407Z",
          "due": "4h59m",
          "operator": "Ride SMART",
          "busId": "GLI85097",
          "price": "22$",
          "seats": 31,
          "source": "NJ",
          "dest": "KY"
      }
  ]


  
}
