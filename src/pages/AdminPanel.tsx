import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company name is required"),
  status: z.string().min(1, "Status is required"),
  price: z.string().min(1, "Price range is required"),
  lotSize: z.string().min(1, "Lot size is required"),
  issueSize: z.string().min(1, "Issue size is required"),
  allotmentLink: z.string().url("Must be a valid URL"),
  financials: z.object({
    revenue2023: z.string(),
    profit2023: z.string(),
    revenue2022: z.string(),
    profit2022: z.string(),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const AdminPanel = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      company: "",
      status: "",
      price: "",
      lotSize: "",
      issueSize: "",
      allotmentLink: "",
      financials: {
        revenue2023: "",
        profit2023: "",
        revenue2022: "",
        profit2022: "",
      },
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to save the data
      console.log("Form submitted:", data);
      toast({
        title: "Success",
        description: "IPO details have been saved successfully.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save IPO details.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-transition p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New IPO</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>IPO Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter IPO title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Open, Upcoming" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price Range</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ₹100-150" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lotSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lot Size</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="issueSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Issue Size</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ₹1000 Cr" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="allotmentLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Allotment Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter allotment check URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Financials</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="financials.revenue2023"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Revenue 2023</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., ₹1000 Cr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="financials.profit2023"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profit 2023</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., ₹100 Cr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="financials.revenue2022"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Revenue 2022</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., ₹800 Cr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="financials.profit2022"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profit 2022</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., ₹80 Cr" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save IPO Details"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;