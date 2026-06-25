import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InputError from "@/components/ui/input-error";
import { ChangePlanProps } from './types';

export default function ChangePlan({ user, onSuccess, plans = [] }: ChangePlanProps) {
    const { t } = useTranslation();
    const { data, setData, patch, processing, errors } = useForm({
        plan_id: user.active_plan ? String(user.active_plan) : '',
        plan_expire_date: user.plan_expire_date ? user.plan_expire_date.split(' ')[0] : '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('users.update-plan', user.id), {
            onSuccess: () => {
                onSuccess();
            }
        });
    };

    return (
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>{t('Change Subscription')} - {user.name}</DialogTitle>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4">
                <div>
                    <Label htmlFor="change_plan_id">{t('Plan')}</Label>
                    <Select value={data.plan_id} onValueChange={(value) => setData('plan_id', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder={t('Select a plan')} />
                        </SelectTrigger>
                        <SelectContent>
                            {plans.map((plan) => (
                                <SelectItem key={plan.id} value={String(plan.id)}>
                                    {plan.name} {plan.free_plan ? `(${t('Free')})` : ''} - {plan.number_of_users} {t('users')}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.plan_id} />
                </div>
                <div>
                    <Label htmlFor="change_plan_expire_date">{t('Expiry Date')}</Label>
                    <Input
                        id="change_plan_expire_date"
                        type="date"
                        value={data.plan_expire_date}
                        onChange={(e) => setData('plan_expire_date', e.target.value)}
                        placeholder={t('Select expiry date')}
                    />
                    <p className="text-xs text-muted-foreground mt-1">{t('Leave empty to set to 1 year from today.')}</p>
                    <InputError message={errors.plan_expire_date} />
                </div>
                <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={onSuccess}>
                        {t('Cancel')}
                    </Button>
                    <Button type="submit" disabled={processing}>
                        {processing ? t('Updating...') : t('Update Subscription')}
                    </Button>
                </div>
            </form>
        </DialogContent>
    );
}
