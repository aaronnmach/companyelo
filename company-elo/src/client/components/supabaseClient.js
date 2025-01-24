// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lchjonblfmzdhyhiljtm.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjaGpvbmJsZm16ZGh5aGlsanRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NDYxMzIsImV4cCI6MjA1MzMyMjEzMn0.C2cTNNL13ZRujzApD2lGubwZGZy2hrZKJOVTgBxp0bI'; // Replace with your anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
