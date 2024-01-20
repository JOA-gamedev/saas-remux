import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { Copy } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Home() {
  return (
    <>
    <Button variant={"destructive"}>
      Click me
    </Button>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
          
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button variant={"destructive"}>BOOM <span className="sr-only">boom</span></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


    <Carousel>
      <CarouselContent className="w-10px">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="https://i.redd.it/the-forgotten-cat-meme-v0-ux74bsifrpda1.jpg?s=8c029ac2691c517e7c99d2b75fee139b9c677721" alt="www" /></CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="https://i.redd.it/se9b1xwi8xo81.jpg" alt="cat" /></CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img className="w-100 h-100" src="https://templated.co/meme-templates/wp-content/uploads/crying-cat-is-sad-cat-meme-template-113x150.webp" alt="" /></CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="https://static.wixstatic.com/media/82daf4_ff1c0ff1c7fa4ae59bff4fae6b167008.jpg/v1/fill/w_564,h_522,al_c,lg_1,q_80,enc_auto/82daf4_ff1c0ff1c7fa4ae59bff4fae6b167008.jpg" alt="" /></CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card></Card></CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Card></Card></CarouselItem>
      </CarouselContent>
    </Carousel>

    </>
  );
}
