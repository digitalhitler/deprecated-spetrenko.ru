/******************************************************************************
 * @project spetrenko.ru                                                      *
 * @description My sweety personal pet-project sources                        *
 * @repository https://github.com/digitalhitler/spetrenko.ru                  *
 *                                                                            *
 * @author Sergey Petrenko <spetrenko@me.com>                                 *
 * @license Creative Commons Attribution-NonCommercial 4.0                    *
 * @licenseUrl  http://creativecommons.org/licenses/by-nc/4.0/                *
 *                                                                            *
 ******************************************************************************/

"use strict";

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  _id: Schema.types.ObjectId,
  ownerId: {
    type: Schema.types.ObjectId },
  title: {
    type: String,  required: true, trim: true },
  description: {
    type: String, required: false },
  timeAdded: {
    type: Date, default: Date.now },
  isValid: {
    type: Boolean, default: true },
  sources: {
      owner_id: { type: Number },
      video_id: { type: Number },
      cachedResponse: {
          timestamp: { type: Date, default: Date.now },
          success: { type: Boolean, default: true },
          data: [ Schema.types.Mixed ],
      }
  }

});