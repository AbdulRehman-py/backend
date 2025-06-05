import { supabase } from "./supabaseClient.js";

// Save image data to Supabase
export async function saveData(image_url, image_name) {
  const { data, error } = await supabase
    .from("shared_images")
    .insert([{ image_url, image_name }])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
