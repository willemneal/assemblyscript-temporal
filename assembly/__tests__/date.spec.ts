import { Date } from "../date";

let date: Date;

describe("construction from millis", () => {
  it("supports millis from epoch", () => {
    date = new Date(7677635557323226);
    expect(date.getTime()).toBe(7677635557323226);
  });
});

describe("construction from ISO date string", () => {
  it("supports year / month / day", () => {
    date = Date.fromString("1976-02-02");
    expect(date.getTime()).toBe(192067200000);
    date = Date.fromString("1976-2-2");
    expect(date.getTime()).toBe(192067200000);
    date = Date.fromString("2345-11-04");
    expect(date.getTime()).toBe(11860387200000);
  });

  it("supports two digit years", () => {
    expect(Date.fromString("1976-04-02").getTime()).toBe(
      Date.fromString("76-04-02").getTime()
    );
  });

  it("supports year / month / day / hour / minute / second", () => {
    date = Date.fromString("1976-02-02T12:34:56");
    expect(date.getTime()).toBe(192112496000);
  });
  it("supports milliseconds", () => {
    date = Date.fromString("1976-02-02T12:34:56.456");
    expect(date.getTime()).toBe(192112496456);
  });
});

describe("getter functions", () => {
  it("from +245264-08-01T15:42:03.226Z", () => {
    date = new Date(7677635557323226);
    expect(date.getUTCFullYear()).toBe(245264);
    expect(date.getUTCMonth()).toBe(7);
    expect(date.getUTCDate()).toBe(1);
    expect(date.getUTCHours()).toBe(15);
    expect(date.getUTCMinutes()).toBe(42);
    expect(date.getUTCSeconds()).toBe(3);
  });

  it("from +024919-03-17T10:32:08.790Z", () => {
    date = new Date(724206997928790);
    expect(date.getUTCFullYear()).toBe(24919);
    expect(date.getUTCMonth()).toBe(2);
    expect(date.getUTCDate()).toBe(17);
    expect(date.getUTCHours()).toBe(10);
    expect(date.getUTCMinutes()).toBe(32);
    expect(date.getUTCSeconds()).toBe(8);
  });

  it("from +253616-09-09T07:05:25.698Z", () => {
    date = new Date(7941202527925698);
    expect(date.getUTCFullYear()).toBe(253616);
    expect(date.getUTCMonth()).toBe(8);
    expect(date.getUTCDate()).toBe(9);
    expect(date.getUTCHours()).toBe(7);
    expect(date.getUTCMinutes()).toBe(5);
    expect(date.getUTCSeconds()).toBe(25);
  });

  it("from +054990-11-30T05:22:42.168Z", () => {
    date = new Date(1673178441762168);
    expect(date.getUTCFullYear()).toBe(54990);
    expect(date.getUTCMonth()).toBe(10);
    expect(date.getUTCDate()).toBe(30);
    expect(date.getUTCHours()).toBe(5);
    expect(date.getUTCMinutes()).toBe(22);
    expect(date.getUTCSeconds()).toBe(42);
  });

  it("from +190921-03-14T11:08:24.076Z", () => {
    date = new Date(5962723931304076);
    expect(date.getUTCFullYear()).toBe(190921);
    expect(date.getUTCMonth()).toBe(2);
    expect(date.getUTCDate()).toBe(14);
    expect(date.getUTCHours()).toBe(11);
    expect(date.getUTCMinutes()).toBe(8);
    expect(date.getUTCSeconds()).toBe(24);
  });

  it("from +134804-04-25T19:06:05.554Z", () => {
    date = new Date(4191846145565554);
    expect(date.getUTCFullYear()).toBe(134804);
    expect(date.getUTCMonth()).toBe(3);
    expect(date.getUTCDate()).toBe(25);
    expect(date.getUTCHours()).toBe(19);
    expect(date.getUTCMinutes()).toBe(6);
    expect(date.getUTCSeconds()).toBe(5);
  });

  it("from +174276-12-30T11:56:58.148Z", () => {
    date = new Date(5437483646218148);
    expect(date.getUTCFullYear()).toBe(174276);
    expect(date.getUTCMonth()).toBe(11);
    expect(date.getUTCDate()).toBe(30);
    expect(date.getUTCHours()).toBe(11);
    expect(date.getUTCMinutes()).toBe(56);
    expect(date.getUTCSeconds()).toBe(58);
  });

  it("from +252309-04-04T08:56:58.720Z", () => {
    date = new Date(7899943856218720);
    expect(date.getUTCFullYear()).toBe(252309);
    expect(date.getUTCMonth()).toBe(3);
    expect(date.getUTCDate()).toBe(4);
    expect(date.getUTCHours()).toBe(8);
    expect(date.getUTCMinutes()).toBe(56);
    expect(date.getUTCSeconds()).toBe(58);
  });

  it("from +013759-01-28T17:45:31.986Z", () => {
    date = new Date(372027318331986);
    expect(date.getUTCFullYear()).toBe(13759);
    expect(date.getUTCMonth()).toBe(0);
    expect(date.getUTCDate()).toBe(28);
    expect(date.getUTCHours()).toBe(17);
    expect(date.getUTCMinutes()).toBe(45);
    expect(date.getUTCSeconds()).toBe(31);
  });

  it("from +200541-11-17T23:33:49.648Z", () => {
    date = new Date(6266323294429648);
    expect(date.getUTCFullYear()).toBe(200541);
    expect(date.getUTCMonth()).toBe(10);
    expect(date.getUTCDate()).toBe(17);
    expect(date.getUTCHours()).toBe(23);
    expect(date.getUTCMinutes()).toBe(33);
    expect(date.getUTCSeconds()).toBe(49);
  });
});

describe("setter functions", () => {
  it("setUTCSeconds", () => {
    date = new Date(372027318331986);
    expect(date.getUTCSeconds()).toBe(31);
    date.setUTCSeconds(12);
    expect(date.getUTCSeconds()).toBe(12);
    date.setUTCSeconds(50);
    expect(date.getUTCSeconds()).toBe(50);
  });

  it("setUTCMinutes", () => {
    date = new Date(372027318331986);
    expect(date.getUTCMinutes()).toBe(45);
    date.setUTCMinutes(12);
    expect(date.getUTCMinutes()).toBe(12);
    date.setUTCMinutes(50);
    expect(date.getUTCMinutes()).toBe(50);
  });

  it("setUTCHours", () => {
    date = new Date(372027318331986);
    expect(date.getUTCHours()).toBe(17);
    date.setUTCHours(12);
    expect(date.getUTCHours()).toBe(12);
    date.setUTCHours(2);
    expect(date.getUTCHours()).toBe(2);
  });

  it("setUTCDate", () => {
    date = new Date(372027318331986);
    expect(date.getUTCDate()).toBe(28);
    date.setUTCDate(12);
    expect(date.getUTCDate()).toBe(12);
    date.setUTCDate(2);
    expect(date.getUTCDate()).toBe(2);
  });

  it("setUTCMonth", () => {
    date = new Date(7899943856218720);
    expect(date.getUTCMonth()).toBe(3);
    date.setUTCMonth(10);
    expect(date.getUTCMonth()).toBe(10);
    date.setUTCMonth(2);
    expect(date.getUTCMonth()).toBe(2);
  });

  it("setUTCYear", () => {
    date = new Date(7941202527925698);
    expect(date.getUTCFullYear()).toBe(253616);
    date.setUTCFullYear(1976);
    expect(date.getUTCFullYear()).toBe(1976);
    date.setUTCFullYear(20212);
    expect(date.getUTCFullYear()).toBe(20212);
  });
});

describe("toString", () => {
  it("toISOString", () => {
    date = new Date(1231231231000);
    expect(date.toISOString()).toBe("2009-01-06T08:40:31");
  });
});
