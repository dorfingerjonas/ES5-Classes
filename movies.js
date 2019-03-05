"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Movies =

    function () {
        function Movies(title, genre, year) {
            _classCallCheck(this, Movies);

            this._title = title;
            this._genre = genre;
            this._year = year;
            counter++;
        }

        _createClass(Movies, [{
            key: "title",
            set: function set(newTitle) {
                if (typeof newTitle === "string") {
                    this._title = newTitle;
                } else {
                    console.log("Invalid title: ".concat(newTitle, " (keeping ").concat(this._title, ")"));
                }
            },
            get: function get() {
                return this._title;
            }
        }, {
            key: "genre",
            set: function set(newGenre) {
                if (Object.values(Movies.genres).includes(newGenre)) {
                    this._genre = newGenre;
                } else {
                    console.log("Invalid genre: ".concat(newGenre, " (keeping ").concat(this._genre, ")"));
                }
            },
            get: function get() {
                return this._genre;
            }
        }, {
            key: "year",
            set: function set(newYear) {
                if (typeof newYear === "number" && newYear >= this._year) {
                    this._year = newYear;
                } else {
                    console.log("Invalid year: ".concat(newYear, " (keeping ").concat(this._year, ")"));
                }
            },
            get: function get() {
                return this._year;
            }
        }], [{
            key: "createActionMovie",
            value: function createActionMovie(title, year) {
                return new Movies(title, Movies.genres.ACTION, year);
            }
        }, {
            key: "counter",
            get: function get() {
                return counter;
            }
        }]);

        return Movies;
    }();

Movies.genres = {
    ACTION: "action",
    ACTION_COMEDY: "action comedy",
    COMEDY: "comedy",
    CRIME: "crime",
    DRAMA: "drama"
};

var counter = 0;

module.exports = Movies;