import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { siteInfo } from '~/data/site-info';
import OpenToHireBtn from '../buttons/OpenToHireBtn';

function OpenToHireModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <OpenToHireBtn>Open To Hire</OpenToHireBtn>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>I&apos;m Open To Hire!</DialogTitle>
          <DialogDescription>
            <p>
              I specialize in JavaScript for both front-end and back-end
              development. Ready to bring your project to life? Let&apos;s
              collaborate!
            </p>
            <p className="pt-2">
              To discuss your needs, email me at{' '}
              <a href={`mailto:${siteInfo.email}`} className="link">
                {siteInfo.email}
              </a>
            </p>
            <p className="pt-2">
              Find my resume at{' '}
              <a href="/resume.pdf" target="_blank" className="link">
                resume.pdf
              </a>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default OpenToHireModal;
